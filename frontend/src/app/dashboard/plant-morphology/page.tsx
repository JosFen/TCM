// app/dashboard/plant-morphology/page.tsx
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

interface PlantMorphology {
    id: number
    lifecycle: string[]
    isTerrestrial?: boolean
    growthHabit?: string
    isDeciduous?: boolean
    isDeciduousNote?: string
    reproductiveSystem?: string
    floweringPeriod?: string[]
    fruitingPeriod?: string[]
    floweringPeriodNote?: string
    fruitingPeriodNote?: string
}

type SortKey = keyof PlantMorphology

export default function PlantMorphologyPage() {
    const [items, setItems] = useState<PlantMorphology[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editBuffer, setEditBuffer] = useState<Partial<PlantMorphology>>({})
    const [newItem, setNewItem] = useState<Partial<PlantMorphology & { plantId: number }>>({})
    const [page, setPage] = useState(1)
    const [columnFilters, setColumnFilters] = useState<Partial<Record<SortKey, string>>>({})
    const [showFilterInput, setShowFilterInput] = useState<Record<string, boolean>>({})
    const [sortKey, setSortKey] = useState<SortKey>('id')
    const [sortAsc, setSortAsc] = useState(true)
    const { accessToken, user } = useAuthStore()
    const router = useRouter()
    const pageSize = 30
    const isAdmin = user?.role === 'ADMIN'
    const plantMorphologyAPI = '/api/proxy/api/v1/plant-morphologies'

    useEffect(() => {
        if (!user) router.push('/auth')
    }, [user, router])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        fetch(plantMorphologyAPI, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) setItems(data)
                else if (Array.isArray(data.data)) setItems(data.data)
                else throw new Error('Unexpected API format')
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [accessToken])

    if (loading) return <p>Loading...</p>
    if (error) return <p className="text-red-500">Error: {error}</p>



    const handleCreate = async () => {
        try {
            const res = await fetch('/api/proxy/api/v1/plant-morphologies', {
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
            setItems((prev) => [...prev, created.data])
            setNewItem({})
        } catch (err) {
            toast.error('Error creating plant morphology')
        }
    }

    const handleColumnFilter = (key: SortKey, value: string) => {
        setColumnFilters((prev) => ({ ...prev, [key]: value }))
    }

    const handleEditChange = (key: keyof PlantMorphology, value: unknown) => {
        setEditBuffer((prev) => ({ ...prev, [key]: value }))
    }

    const handleUpdate = async (id: number) => {
        try {
            const res = await fetch(`${plantMorphologyAPI}/${id}`, {
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
            setItems((prev) => prev.map((it) => (it.id === id ? updated.data : it)))
            setEditingId(null)
        } catch (err) {
            toast.error('Error updating')
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this item?')) return
        try {
            const res = await fetch(`${plantMorphologyAPI}/${id}`, {
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

    const columnKeys: SortKey[] = ['id', 'lifecycle', 'isTerrestrial', 'growthHabit', 'isDeciduous', 'isDeciduousNote', 'reproductiveSystem', 'floweringPeriod', 'fruitingPeriod', 'floweringPeriodNote', 'fruitingPeriodNote']

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Plant Morphology </h1>

            {isAdmin && (
                <div className="flex flex-wrap gap-2 border-2 rounded-md p-6">
                    <Input type="text" placeholder="Lifecycle (comma-separated)" value={newItem.lifecycle?.join(', ') || ''} onChange={(e) => setNewItem((p) => ({ ...p, lifecycle: e.target.value.split(',').map(s => s.trim()) }))} />
                    <Input placeholder="Growth Habit" value={newItem.growthHabit || ''} onChange={(e) => setNewItem((p) => ({ ...p, growthHabit: e.target.value }))} />
                    <Input placeholder="Reproductive System" value={newItem.reproductiveSystem || ''} onChange={(e) => setNewItem((p) => ({ ...p, reproductiveSystem: e.target.value }))} />
                    <Input placeholder="Flowering Period (comma-separated)" value={newItem.floweringPeriod?.join(', ') || ''} onChange={(e) => setNewItem((p) => ({ ...p, floweringPeriod: e.target.value.split(',').map(s => s.trim()) }))} />
                    <Input placeholder="Fruiting Period (comma-separated)" value={newItem.fruitingPeriod?.join(', ') || ''} onChange={(e) => setNewItem((p) => ({ ...p, fruitingPeriod: e.target.value.split(',').map(s => s.trim()) }))} />
                    <Textarea placeholder="Flowering Period Note" value={newItem.floweringPeriodNote || ''} onChange={(e) => setNewItem((p) => ({ ...p, floweringPeriodNote: e.target.value }))} />
                    <Textarea placeholder="Fruiting Period Note" value={newItem.fruitingPeriodNote || ''} onChange={(e) => setNewItem((p) => ({ ...p, fruitingPeriodNote: e.target.value }))} />
                    <Button onClick={handleCreate}>Add</Button>
                </div>
            )}
            <hr />
            <Table>
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
                        <TableRow key={item.id}>
                            {columnKeys.map((key) => (
                                <TableCell key={key}>
                                    {editingId === item.id ? (
                                        <>{key.endsWith('Note') ? (
                                            <Textarea value={(editBuffer[key] as string) || ''} onChange={(e) => handleEditChange(key, e.target.value)} />
                                        ) : (
                                            <Input value={(editBuffer[key] as string) || ''} onChange={(e) => handleEditChange(key, e.target.value)} />
                                        )}</>
                                    ) : (
                                        Array.isArray(item[key]) ? (item[key] as string[]).join(', ') : String(item[key] ?? '')
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
