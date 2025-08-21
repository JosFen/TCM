'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Search } from 'lucide-react'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface BotanicalGarden {
    id: number
    botanicalGardenName: string
    plants?: { internalId: number; plantScientificName: string }[]
}

type SortKey = keyof BotanicalGarden

export default function BotanicalGardenPage() {
    const { user, accessToken } = useAuthStore()
    const router = useRouter()
    const isAdmin = user?.role === 'ADMIN'
    const [items, setItems] = useState<BotanicalGarden[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editBuffer, setEditBuffer] = useState<Partial<BotanicalGarden>>({})
    const [newItem, setNewItem] = useState<Partial<BotanicalGarden>>({})
    const [columnFilters, setColumnFilters] = useState<Partial<Record<SortKey, string>>>({})
    const [showFilterInput, setShowFilterInput] = useState<Record<string, boolean>>({})
    const [sortKey, setSortKey] = useState<SortKey>('id')
    const [sortAsc, setSortAsc] = useState(true)
    const [page, setPage] = useState(1)
    const pageSize = 30
    const api = '/api/proxy/api/v1/botanical-gardens'

    useEffect(() => {
        if (!user) router.push('/auth')
    }, [user, router])

    useEffect(() => {
        fetch(api, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success && Array.isArray(data.data)) setItems(data.data)
            })
    }, [accessToken])

    const handleEditChange = (key: keyof BotanicalGarden, value: string) => {
        setEditBuffer(prev => ({ ...prev, [key]: value }))
    }

    const handleUpdate = async (id: number) => {
        try {
            const res = await fetch(`${api}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(editBuffer),
            })
            if (!res.ok) throw new Error('Failed to update')
            toast.success('Updated')
            const updated = await res.json()
            setItems(prev => prev.map(g => (g.id === id ? updated.data : g)))
            setEditingId(null)
        } catch (e) {
            toast.error('Update failed')
        }
    }

    const handleCreate = async () => {
        try {
            const res = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(newItem),
            })
            if (!res.ok) throw new Error('Failed to create')
            toast.success('Created')
            const created = await res.json()
            setItems(prev => [...prev, created.data])
            setNewItem({})
        } catch (e) {
            toast.error('Create failed')
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure?')) return
        try {
            const res = await fetch(`${api}/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            if (!res.ok) throw new Error('Failed to delete')
            toast.success('Deleted')
            setItems(prev => prev.filter(g => g.id !== id))
        } catch (e) {
            toast.error('Delete failed')
        }
    }

    const columnKeys: SortKey[] = ['id', 'botanicalGardenName']

    const filteredSortedItems = [...items]
        .filter(item =>
            Object.entries(columnFilters).every(([key, value]) =>
                (item[key as SortKey] + '').toLowerCase().includes(value.toLowerCase())
            )
        )
        .sort((a, b) => {
            const aVal = a[sortKey] ?? ''
            const bVal = b[sortKey] ?? ''
            return sortAsc
                ? ('' + aVal).localeCompare('' + bVal)
                : ('' + bVal).localeCompare('' + aVal)
        })

    const pagedItems = filteredSortedItems.slice((page - 1) * pageSize, page * pageSize)
    const totalPages = Math.ceil(filteredSortedItems.length / pageSize)

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Botanical Gardens</h1>

            {isAdmin && (
                <div className="flex flex-wrap gap-2 border p-4 rounded-md">
                    <Input placeholder="Garden Name" value={newItem.botanicalGardenName || ''} onChange={(e) => setNewItem(p => ({ ...p, botanicalGardenName: e.target.value }))} />
                    <Button onClick={handleCreate}>Add</Button>
                </div>
            )}

            <Table className="w-full text-wrap">
                <TableHeader>
                    <TableRow>
                        {columnKeys.map((key) => (
                            <TableHead key={key} className="whitespace-normal">
                                <div className="flex items-center gap-1">
                                    <div onClick={() => {
                                        setSortKey(key)
                                        setSortAsc(prev => key === sortKey ? !prev : true)
                                    }} className="cursor-pointer flex items-center gap-1">
                                        <span>{key}</span>
                                        <span>{sortKey === key ? (sortAsc ? '▲' : '▼') : ''}</span>
                                    </div>
                                    <Button variant="ghost" size="sm" onClick={() => setShowFilterInput(prev => ({ ...prev, [key]: !prev[key] }))}>
                                        <Search className="w-4 h-4 text-muted-foreground" />
                                    </Button>
                                </div>
                                {showFilterInput[key] && (
                                    <Input className="mt-1" placeholder="Search..." value={columnFilters[key] || ''} onChange={(e) => setColumnFilters(prev => ({ ...prev, [key]: e.target.value }))} />
                                )}
                            </TableHead>
                        ))}
                        {isAdmin && <TableHead>Actions</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pagedItems.map((garden) => (
                        <TableRow key={garden.id}>
                            {columnKeys.map((key) => (
                                <TableCell key={key}>
                                    {editingId === garden.id ? (
                                        typeof garden[key] === 'string' || typeof garden[key] === 'number' ? (
                                            <Input
                                                value={(editBuffer[key] as string | number | undefined) ?? ''}
                                                onChange={(e) => handleEditChange(key, e.target.value)}
                                            />
                                        ) : (
                                            <div className="text-sm text-muted-foreground italic">Editing not supported</div>
                                        )
                                    ) : (key === 'plants' && Array.isArray(garden.plants))
                                        ? (garden.plants as { plantScientificName: string }[]).map((plant, idx) => (
                                            <div key={idx}>{plant.plantScientificName}</div>
                                        ))
                                        : editingId === garden.id
                                            ? (
                                                <Input
                                                    value={(editBuffer[key] as string | number | undefined) ?? ''}
                                                    onChange={(e) => handleEditChange(key, e.target.value)}
                                                />
                                            )
                                            : (
                                                (garden[key] as string | number | undefined) ?? ''
                                            )
                                    }

                                </TableCell>
                            ))}
                            {isAdmin && (
                                <TableCell className="space-x-2">
                                    {editingId === garden.id ? (
                                        <>
                                            <Button size="sm" onClick={() => handleUpdate(garden.id)}>Save</Button>
                                            <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button size="sm" variant="outline" onClick={() => { setEditingId(garden.id); setEditBuffer(garden) }}>Edit</Button>
                                            <Button size="sm" variant="destructive" onClick={() => handleDelete(garden.id)}>Delete</Button>
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
                    <Button variant="outline" size="sm" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Previous</Button>
                    <Button variant="outline" size="sm" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
                </div>
            </div>
        </div>
    )
}
