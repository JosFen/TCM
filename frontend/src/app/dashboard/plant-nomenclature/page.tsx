// app/dashboard/plant-nomenclature/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
// import { Combobox } from '@/components/ui/combobox'

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
    const [search, setSearch] = useState('')
    const [sortKey, setSortKey] = useState<SortKey>('internalId')
    const [sortAsc, setSortAsc] = useState(true)
    const [newItem, setNewItem] = useState<Partial<PlantNomenclature>>({})
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

    const filteredSortedItems = [...items]
        .filter((item) =>
            item.internalId.toString().toLowerCase().includes(search.toLowerCase()) ||
            item.taxonomyId.toString().toLowerCase().includes(search.toLowerCase()) ||
            item.plantScientificName.toLowerCase().includes(search.toLowerCase()) ||
            item.plantCommonName.join(', ').toLowerCase().includes(search.toLowerCase()) ||
            item.plantChineseName?.toLowerCase().includes(search.toLowerCase()) ||
            item.plantPinyin?.toLowerCase().includes(search.toLowerCase())
        )
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
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Plant Nomenclature</h1>



            {isAdmin && (
                <div className="flex flex-wrap gap-2"> Create New Plant Nomenclature
                    <Input placeholder="Scientific Name" value={newItem.plantScientificName || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantScientificName: e.target.value }))} />
                    <Input placeholder="Common Names (comma-separated)" value={newItem.plantCommonName?.join(', ') || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantCommonName: e.target.value.split(',').map(s => s.trim()) }))} />
                    <Input placeholder="Pinyin" value={newItem.plantPinyin || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantPinyin: e.target.value }))} />
                    <Input placeholder="Chinese Name" value={newItem.plantChineseName || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantChineseName: e.target.value }))} />
                    <Input type="number" placeholder="Taxonomy ID" value={newItem.taxonomyId || ''} onChange={(e) => setNewItem((p) => ({ ...p, taxonomyId: Number(e.target.value) }))} />
                    <Input placeholder="Links (comma-separated)" value={newItem.links?.join(', ') || ''} onChange={(e) => setNewItem((p) => ({ ...p, links: e.target.value.split(',').map(s => s.trim()) }))} />
                    <Button onClick={handleCreate}>Add</Button>
                </div>
            )}
            <hr />
            <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />

            <Table>
                <TableHeader>
                    <TableRow>
                        {(['internalId', 'taxonomyId', 'plantScientificName', 'plantPinyin', 'plantChineseName'] as SortKey[]).map((key) => (
                            <TableHead
                                key={key}
                                className="cursor-pointer hover:underline"
                                onClick={() => {
                                    setSortKey(key)
                                    setSortAsc((prev) => (key === sortKey ? !prev : true))
                                }}
                            >
                                {key} {sortKey === key ? (sortAsc ? '▲' : '▼') : ''}
                            </TableHead>
                        ))}
                        <TableHead>Common Names</TableHead>
                        <TableHead>Links</TableHead>
                        {isAdmin && <TableHead>Actions</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pagedItems.map((item) => (
                        <TableRow key={item.internalId}>
                            <TableCell>{item.internalId}</TableCell>
                            <TableCell>
                                {editingId === item.internalId ? (
                                    <Input type="number" value={item.taxonomyId} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, taxonomyId: Number(e.target.value) } : i))} />
                                ) : item.taxonomyId}
                            </TableCell>
                            <TableCell>
                                {editingId === item.internalId ? (
                                    <Input value={item.plantScientificName} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, plantScientificName: e.target.value } : i))} />
                                ) : item.plantScientificName}
                            </TableCell>
                            <TableCell>
                                {editingId === item.internalId ? (
                                    <Input value={item.plantPinyin || ''} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, plantPinyin: e.target.value } : i))} />
                                ) : item.plantPinyin || '-'}
                            </TableCell>
                            <TableCell>
                                {editingId === item.internalId ? (
                                    <Input value={item.plantChineseName || ''} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, plantChineseName: e.target.value } : i))} />
                                ) : item.plantChineseName || '-'}
                            </TableCell>
                            <TableCell>
                                {editingId === item.internalId ? (
                                    <Input value={item.plantCommonName.join(', ')} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, plantCommonName: e.target.value.split(',').map(s => s.trim()) } : i))} />
                                ) : item.plantCommonName.join(', ')}
                            </TableCell>
                            <TableCell className="whitespace-pre-wrap break-words">
                                {editingId === item.internalId ? (
                                    <Input value={item.links.join(', ')} onChange={(e) => setItems((prev) => prev.map((i) => i.internalId === item.internalId ? { ...i, links: e.target.value.split(',').map(s => s.trim()) } : i))} />
                                ) : item.links.join(', ')}
                            </TableCell>
                            {isAdmin && (
                                <TableCell className="space-x-2">
                                    {editingId === item.internalId ? (
                                        <>
                                            <Button size="sm" variant="outline" onClick={() => handleUpdate(item.internalId, item)}>Save</Button>
                                            <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button size="sm" variant="outline" onClick={() => setEditingId(item.internalId)}>Edit</Button>
                                            <Button size="sm" variant="destructive" onClick={() => handleDelete(item.internalId)}>Delete</Button>
                                        </>
                                    )}
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between items-center pt-4">
                <p className="text-sm text-muted-foreground">
                    Page {page} of {totalPages}
                </p>
                <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Previous</Button>
                    <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
                </div>
            </div>
        </div>
    )
}
