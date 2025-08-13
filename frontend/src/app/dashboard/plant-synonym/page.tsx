// app/dashboard/plant-synonym/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

interface PlantSynonym {
    id: number
    plantId: number
    name?: string
}

type SortKey = keyof PlantSynonym

export default function PlantSynonymPage() {
    const [items, setItems] = useState<PlantSynonym[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [sortKey, setSortKey] = useState<SortKey>('id')
    const [sortAsc, setSortAsc] = useState(true)
    const [columnFilters, setColumnFilters] = useState<Partial<Record<SortKey, string>>>({})
    const [showFilterInput, setShowFilterInput] = useState<Record<string, boolean>>({})
    const [newItem, setNewItem] = useState<Partial<PlantSynonym>>({})
    const { accessToken, user } = useAuthStore()
    const router = useRouter()
    const pageSize = 30
    const isAdmin = user?.role === 'ADMIN'

    const plantSynonymAPI = '/api/proxy/api/v1/plant-synonyms'

    useEffect(() => {
        if (!user) router.push('/auth')
    }, [user, router])

    useEffect(() => {
        fetch(plantSynonymAPI, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data.data)) {
                    setItems(data.data)
                }
            })
    }, [accessToken])

    const handleColumnFilter = (key: SortKey, value: string) => {
        setColumnFilters((prev) => ({ ...prev, [key]: value }))
    }

    const handleUpdate = async (id: number, updated: PlantSynonym) => {
        try {
            const res = await fetch(`${plantSynonymAPI}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(updated),
            })
            if (!res.ok) throw new Error('Update failed')
            const data = await res.json()
            setItems((prev) => prev.map((i) => (i.id === id ? data.data : i)))
            toast.success('Synonym updated')
            setEditingId(null)
        } catch (err) {
            toast.error('Update failed')
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await fetch(`${plantSynonymAPI}/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            setItems((prev) => prev.filter((i) => i.id !== id))
            toast.success('Synonym deleted')
        } catch {
            toast.error('Delete failed')
        }
    }

    const handleCreate = async () => {
        try {
            const res = await fetch(plantSynonymAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(newItem),
            })
            const data = await res.json()
            setItems((prev) => [...prev, data])
            setNewItem({})
            toast.success('Created synonym')
        } catch {
            toast.error('Failed to create synonym')
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
            if (sortKey === 'id') return sortAsc ? a.id - b.id : b.id - a.id
            return sortAsc ? ('' + aVal).localeCompare('' + bVal) : ('' + bVal).localeCompare('' + aVal)
        })

    const totalPages = Math.ceil(filteredSortedItems.length / pageSize)
    const pagedItems = filteredSortedItems.slice((page - 1) * pageSize, page * pageSize)

    if (!user) return null

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Plant Synonyms</h1>

            {isAdmin && (
                <div className="flex flex-wrap gap-2 border-2 rounded-md p-6">
                    <Input type="number" placeholder="Plant ID" value={newItem.plantId || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantId: Number(e.target.value) }))} />
                    <Input placeholder="Synonym name" value={newItem.name || ''} onChange={(e) => setNewItem((p) => ({ ...p, name: e.target.value }))} />
                    <Button onClick={handleCreate}>Add</Button>
                </div>
            )}

            <Table>
                <TableHeader>
                    <TableRow>
                        {(['id', 'plantId', 'name'] as SortKey[]).map((key) => (
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
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{editingId === item.id ? <Input value={item.plantId} type="number" onChange={(e) => setItems((prev) => prev.map((i) => i.id === item.id ? { ...i, plantId: Number(e.target.value) } : i))} /> : item.plantId}</TableCell>
                            <TableCell>{editingId === item.id ? <Input value={item.name || ''} onChange={(e) => setItems((prev) => prev.map((i) => i.id === item.id ? { ...i, name: e.target.value } : i))} /> : item.name}</TableCell>
                            {isAdmin && (
                                <TableCell className="space-x-2">{editingId === item.id ? (<><Button size="sm" variant="outline" onClick={() => handleUpdate(item.id, item)}>Save</Button><Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button></>) : (<><Button size="sm" variant="outline" onClick={() => setEditingId(item.id)}>Edit</Button><Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>Delete</Button></>)}</TableCell>
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
