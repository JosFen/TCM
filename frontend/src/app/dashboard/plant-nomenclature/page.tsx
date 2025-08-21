// app/dashboard/plant-nomenclature/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
// import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Search } from 'lucide-react'
// import { cn } from '@/lib/utils'

interface PlantNomenclature {
    internalId: number
    plantScientificName: string
    plantCommonName: string[]
    plantPinyin?: string
    plantChineseName?: string
    taxonomyId: number
    links: string[]
}

type SortKey = keyof PlantNomenclature

export default function PlantNomenclaturePage() {
    const [items, setItems] = useState<PlantNomenclature[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [page, setPage] = useState(1)
    // const [search, setSearch] = useState('')
    const [sortKey, setSortKey] = useState<SortKey>('internalId')
    const [sortAsc, setSortAsc] = useState(true)
    const [newItem, setNewItem] = useState<Partial<PlantNomenclature>>({})
    const [columnFilters, setColumnFilters] = useState<Partial<Record<SortKey, string>>>({})
    const [showFilterInput, setShowFilterInput] = useState<Record<string, boolean>>({})
    const { accessToken, user } = useAuthStore()
    const router = useRouter()
    const pageSize = 30
    const isAdmin = user?.role === 'ADMIN'
    const plantNomenclatureAPI = '/api/proxy/api/v1/plant-nomenclatures'

    useEffect(() => {
        if (!user) router.push('/auth')
    }, [user, router])

    useEffect(() => {
        fetch(plantNomenclatureAPI, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data['plant-nomenclatures'])) {
                    setItems(data['plant-nomenclatures'])
                }
            })
    }, [accessToken])

    const handleCreate = () => {
        fetch(plantNomenclatureAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((created) => {
                setItems((prev) => [...prev, created])
                setNewItem({})
                toast.success('Created successfully')
            })
    }


    const handleUpdate = (id: number, updates: Partial<PlantNomenclature>) => {
        fetch(`${plantNomenclatureAPI}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(updates),
        })
            .then(() => {
                setItems((prev) => prev.map((i) => (i.internalId === id ? { ...i, ...updates } : i)))
                setEditingId(null)
                toast.success('Updated')
            })
    }

    const handleDelete = (id: number) => {
        fetch(`${plantNomenclatureAPI}/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then(() => {
                setItems((prev) => prev.filter((i) => i.internalId !== id))
                toast.success('Deleted')
            })
    }

    const handleColumnFilter = (key: SortKey, value: string) => {
        setColumnFilters((prev) => ({ ...prev, [key]: value }))
    }

    const filteredSortedItems = [...items]
        .filter((item) => {
            return Object.entries(columnFilters).every(([key, value]) => {
                const cell = item[key as SortKey]
                return ('' + (Array.isArray(cell) ? cell.join(', ') : cell || '')).toLowerCase().includes(value.toLowerCase())
            })
        })
        .sort((a, b) => {
            const aVal = a[sortKey] ?? ''
            const bVal = b[sortKey] ?? ''
            if (sortKey === 'internalId') return sortAsc ? a.internalId - b.internalId : b.internalId - a.internalId
            return sortAsc ? ('' + aVal).localeCompare('' + bVal) : ('' + bVal).localeCompare('' + aVal)
        })


    const totalPages = Math.ceil(filteredSortedItems.length / pageSize)
    const pagedItems = filteredSortedItems.slice((page - 1) * pageSize, page * pageSize)

    if (!user) return null

    return (
        <div className="space-y-6 overflow-x-auto w-full">
            <h1 className="text-2xl font-bold">Plant Nomenclature</h1>

            {isAdmin && (
                <div className="flex flex-wrap gap-2 border-2 rounded-md p-6"> Create New Plant Nomenclature
                    <Input type="number" placeholder="Taxonomy ID" value={newItem.taxonomyId || ''} onChange={(e) => setNewItem((p) => ({ ...p, taxonomyId: Number(e.target.value) }))} />
                    <Input placeholder="Scientific Name" value={newItem.plantScientificName || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantScientificName: e.target.value }))} />
                    <Input placeholder="Common Names (comma-separated)" value={newItem.plantCommonName?.join(', ') || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantCommonName: e.target.value.split(',').map(s => s.trim()) }))} />
                    <Input placeholder="Pinyin" value={newItem.plantPinyin || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantPinyin: e.target.value }))} />
                    <Input placeholder="Chinese Name" value={newItem.plantChineseName || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantChineseName: e.target.value }))} />
                    <Input placeholder="Links (comma-separated)" value={newItem.links?.join(', ') || ''} onChange={(e) => setNewItem((p) => ({ ...p, links: e.target.value.split(',').map(s => s.trim()) }))} />
                    <Button onClick={handleCreate}>Add</Button>
                </div>
            )}
            <hr />

            <Table className='w-full table-auto'>
                <TableHeader>
                    <TableRow>
                        {(['internalId', 'taxonomyId', 'plantScientificName', 'plantPinyin', 'plantChineseName', 'plantCommonName', 'links'] as SortKey[]).map((key) => (
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
                        <TableRow key={item.internalId} className='text-wrap'>
                            <TableCell className="whitespace-normal break-words align-top">{editingId === item.internalId ? <Input type="number" value={item.taxonomyId} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, taxonomyId: Number(e.target.value) } : i))} /> : item.taxonomyId}</TableCell>
                            <TableCell className="whitespace-normal break-words align-top">{item.internalId}</TableCell>
                            <TableCell className="whitespace-normal break-words align-top">{editingId === item.internalId ? <Input value={item.plantScientificName} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, plantScientificName: e.target.value } : i))} /> : item.plantScientificName}</TableCell>
                            <TableCell className="whitespace-normal break-words align-top">{editingId === item.internalId ? <Input value={item.plantPinyin || ''} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, plantPinyin: e.target.value } : i))} /> : item.plantPinyin || '-'}</TableCell>
                            <TableCell className="whitespace-normal break-words align-top">{editingId === item.internalId ? <Input value={item.plantChineseName || ''} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, plantChineseName: e.target.value } : i))} /> : item.plantChineseName || '-'}</TableCell>
                            <TableCell className="whitespace-normal break-words align-top">{editingId === item.internalId ? <Input value={item.plantCommonName.join(', ')} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, plantCommonName: e.target.value.split(',').map(s => s.trim()) } : i))} /> : item.plantCommonName.join(', ')}</TableCell>
                            <TableCell className="max-w-xs whitespace-pre-wrap break-words">{editingId === item.internalId ? <Input value={item.links.join(', ')} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, links: e.target.value.split(',').map(s => s.trim()) } : i))} /> : item.links.join(', ')}</TableCell>
                            {isAdmin && (
                                <TableCell className="space-x-2">{editingId === item.internalId ? (<><Button size="sm" variant="outline" onClick={() => handleUpdate(item.internalId, item)}>Save</Button><Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button></>) : (<><Button size="sm" variant="outline" onClick={() => setEditingId(item.internalId)}>Edit</Button><Button size="sm" variant="destructive" onClick={() => handleDelete(item.internalId)}>Delete</Button></>)}</TableCell>
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
