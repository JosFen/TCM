// app/dashboard/plant-ecology-distribution/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

interface EcologyDistribution {
    id: number
    habitat?: string
    plantOrigin?: string
    globalRange?: string
    chinaRange?: string
    endemic?: string
    plantId: number
}

type SortKey = keyof EcologyDistribution

export default function PlantEcologyDistributionPage() {
    const [items, setItems] = useState<EcologyDistribution[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editBuffer, setEditBuffer] = useState<Partial<EcologyDistribution>>({})
    const [newItem, setNewItem] = useState<Partial<EcologyDistribution>>({})
    const [page, setPage] = useState(1)
    const [columnFilters, setColumnFilters] = useState<Partial<Record<SortKey, string>>>({})
    const [showFilterInput, setShowFilterInput] = useState<Record<string, boolean>>({})
    const [sortKey, setSortKey] = useState<SortKey>('id')
    const [sortAsc, setSortAsc] = useState(true)
    const { accessToken, user } = useAuthStore()
    const router = useRouter()
    const pageSize = 30
    const isAdmin = user?.role === 'ADMIN'
    const ecologyDistributionAPI = '/api/proxy/api/v1/plant-ecology-distributions'

    useEffect(() => {
        if (!user) router.push('/auth')
    }, [user, router])

    useEffect(() => {
        fetch('/api/proxy/api/v1/plant-ecology-distributions', {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then((data) => Array.isArray(data['plant-ecology-distributions']) && setItems(data['plant-ecology-distributions']))
    }, [accessToken])

    const handleColumnFilter = (key: SortKey, value: string) => {
        setColumnFilters((prev) => ({ ...prev, [key]: value }))
    }

    const handleEditChange = (key: keyof EcologyDistribution, value: unknown) => {
        setEditBuffer((prev) => ({ ...prev, [key]: value }))
    }

    const handleUpdate = async (id: number) => {
        try {
            const res = await fetch(`${ecologyDistributionAPI}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(editBuffer),
            })
            if (!res.ok) throw new Error('Update failed')
            toast.success('Updated')
            const updated = await res.json()
            setItems((prev) => prev.map((it) => (it.id === id ? updated : it)))
            setEditingId(null)
        } catch (err) {
            toast.error('Error updating')
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure?')) return
        try {
            const res = await fetch(`${ecologyDistributionAPI}/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            if (!res.ok) throw new Error('Delete failed')
            toast.success('Deleted')
            setItems((prev) => prev.filter((it) => it.id !== id))
        } catch (err) {
            toast.error('Error deleting')
        }
    }

    const handleCreate = async () => {
        try {
            const res = await fetch(ecologyDistributionAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(newItem),
            })
            if (!res.ok) throw new Error('Create failed')
            toast.success('Created')
            const created = await res.json()
            setItems((prev) => [...prev, created])
            setNewItem({})
        } catch (err) {
            toast.error('Error creating')
        }
    }

    const filteredSortedItems = [...items]
        .filter((item) => {
            return Object.entries(columnFilters).every(([key, value]) => {
                const cell = item[key as SortKey]
                return ('' + (cell || '')).toLowerCase().includes(value.toLowerCase())
            })
        })
        .sort((a, b) => {
            const aVal = a[sortKey] ?? ''
            const bVal = b[sortKey] ?? ''
            if (sortKey === 'id' || sortKey === 'plantId') return sortAsc ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number)
            return sortAsc ? ('' + aVal).localeCompare('' + bVal) : ('' + bVal).localeCompare('' + aVal)
        })

    const totalPages = Math.ceil(filteredSortedItems.length / pageSize)
    const pagedItems = filteredSortedItems.slice((page - 1) * pageSize, page * pageSize)

    const columnKeys: SortKey[] = ['id', 'plantId', 'habitat', 'plantOrigin', 'globalRange', 'chinaRange', 'endemic']

    return (
        <div className="space-y-6 overflow-x-auto w-full">
            <h1 className="text-2xl font-bold">Plant Ecology Distribution</h1>

            {isAdmin && (
                <div className="flex flex-wrap gap-2 border-2 rounded-md p-6">
                    <Input type="number" placeholder="Plant ID" value={newItem.plantId || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantId: Number(e.target.value) }))} />
                    <Input placeholder="Habitat" value={newItem.habitat || ''} onChange={(e) => setNewItem((p) => ({ ...p, habitat: e.target.value }))} />
                    <Input placeholder="Plant Origin" value={newItem.plantOrigin || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantOrigin: e.target.value }))} />
                    <Input placeholder="Global Range" value={newItem.globalRange || ''} onChange={(e) => setNewItem((p) => ({ ...p, globalRange: e.target.value }))} />
                    <Input placeholder="China Range" value={newItem.chinaRange || ''} onChange={(e) => setNewItem((p) => ({ ...p, chinaRange: e.target.value }))} />
                    <Input placeholder="Endemic" value={newItem.endemic || ''} onChange={(e) => setNewItem((p) => ({ ...p, endemic: e.target.value }))} />
                    <Button onClick={handleCreate}>Add</Button>
                </div>
            )}

            <Table className='w-full table-auto'>
                <TableHeader>
                    <TableRow>
                        {columnKeys.map((key) => (
                            <TableHead key={key} className="cursor-pointer">
                                <div className="flex items-center gap-1">
                                    <div onClick={() => {
                                        setSortKey(key)
                                        setSortAsc((prev) => key === sortKey ? !prev : true)
                                    }} className="flex items-center gap-1 cursor-pointer">
                                        <span>{key}</span>
                                        <span>{sortKey === key ? (sortAsc ? '▲' : '▼') : ''}</span>
                                    </div>

                                    <Button variant="ghost" size='sm' onClick={() =>
                                        setShowFilterInput(prev => ({ ...prev, [key]: !prev[key] }))
                                    }>
                                        <Search className="text-gray-500 w-4 h-4" />
                                    </Button>
                                </div>
                                {showFilterInput[key] && (
                                    <Input
                                        className="mt-1"
                                        placeholder="Search..."
                                        value={columnFilters[key] || ''}
                                        onChange={(e) => handleColumnFilter(key, e.target.value)}
                                    />
                                )}

                            </TableHead>
                        ))}
                        {isAdmin && <TableHead>Actions</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pagedItems.map((item) => (
                        <TableRow key={item.id} className='text-wrap'>
                            {columnKeys.map((key) => (
                                <TableCell key={key} className="whitespace-normal break-words align-top">
                                    {editingId === item.id ? (
                                        <Input value={(editBuffer[key] as string) || ''} onChange={(e) => handleEditChange(key, e.target.value)} />
                                    ) : (
                                        item[key] || ''
                                    )}
                                </TableCell>
                            ))}
                            {isAdmin && (
                                <TableCell className="space-x-2">
                                    {editingId === item.id ? (
                                        <>
                                            <Button size="sm" onClick={() => handleUpdate(item.id)}>Save</Button>
                                            <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button size="sm" variant="outline" onClick={() => { setEditingId(item.id); setEditBuffer(item) }}>Edit</Button>
                                            <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </>
                                    )}
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between items-center pt-4">
                <p className="text-sm text-muted-foreground">Page {page} of {totalPages}</p>
                <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Previous</Button>
                    <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
                </div>
            </div>
        </div>
    )
}
