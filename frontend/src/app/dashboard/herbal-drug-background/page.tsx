'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

const MONTHS = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
]

interface HerbalDrugBackground {
    id: number
    herbalDrugPinyin: string
    plantScientificName: string
    pharmaceuticalName: string
    harvestingTime: string[]
    harvestingTimeNote?: string
    plantPartUsed?: string
    officialStatus?: boolean
    primaryProcessing?: string
    secondaryProcessing?: string
    herbalDruglImage?: string
    sourcingBackgrounds?: { id: number } // 1 to 1
}

type SortKey = keyof HerbalDrugBackground

export default function HerbalDrugBackgroundPage() {
    const [items, setItems] = useState<HerbalDrugBackground[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editBuffer, setEditBuffer] = useState<Partial<HerbalDrugBackground>>({})
    const [newItem, setNewItem] = useState<Partial<HerbalDrugBackground>>({})
    const [page, setPage] = useState(1)
    const [columnFilters, setColumnFilters] = useState<Partial<Record<SortKey, string>>>({})
    const [showFilterInput, setShowFilterInput] = useState<Record<string, boolean>>({})
    const [sortKey, setSortKey] = useState<SortKey>('id')
    const [sortAsc, setSortAsc] = useState(true)
    const { accessToken, user } = useAuthStore()
    const router = useRouter()
    const pageSize = 30
    const isAdmin = user?.role === 'ADMIN'
    const endpoint = '/api/proxy/api/v1/herbal-drug-backgrounds'

    useEffect(() => {
        if (!user) router.push('/auth')
    }, [user, router])

    useEffect(() => {
        fetch(endpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then((data) => Array.isArray(data.data) && setItems(data.data))
    }, [accessToken])

    const handleEditChange = (key: keyof HerbalDrugBackground, value: unknown) => {
        setEditBuffer((prev) => ({ ...prev, [key]: value }))
    }

    const handleUpdate = async (id: number) => {
        try {
            const res = await fetch(`${endpoint}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(editBuffer),
            })
            if (!res.ok) throw new Error('Update failed')
            const updated = await res.json()
            setItems((prev) => prev.map((it) => (it.id === id ? updated.data : it)))
            setEditingId(null)
            toast.success('Updated')
        } catch {
            toast.error('Error updating')
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure?')) return
        try {
            await fetch(`${endpoint}/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            setItems((prev) => prev.filter((it) => it.id !== id))
            toast.success('Deleted')
        } catch {
            toast.error('Error deleting')
        }
    }

    const handleCreate = async () => {
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ ...newItem }),
            })
            if (!res.ok) throw new Error('Create failed')
            const created = await res.json()
            setItems((prev) => [...prev, created.data])
            setNewItem({})
            toast.success('Created')
        } catch {
            toast.error('Error creating')
        }
    }

    const filteredSortedItems = [...items]
        .filter((item) => {
            return Object.entries(columnFilters).every(([key, value]) => {
                const cell = item[key as SortKey]
                return (Array.isArray(cell) ? cell.join(', ') : '' + (cell || '')).toLowerCase().includes(value.toLowerCase())
            })
        })
        .sort((a, b) => {
            const aVal = a[sortKey] ?? ''
            const bVal = b[sortKey] ?? ''
            if (sortKey === 'id') return sortAsc ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number)
            return sortAsc ? ('' + aVal).localeCompare('' + bVal) : ('' + bVal).localeCompare('' + aVal)
        })
        
    const totalPages = Math.ceil(filteredSortedItems.length / pageSize)
    const pagedItems = filteredSortedItems.slice((page - 1) * pageSize, page * pageSize)

    const columnKeys: SortKey[] = [
        'id',
        'herbalDrugPinyin',
        'plantScientificName',
        'pharmaceuticalName',
        'harvestingTime',
        'harvestingTimeNote',
        'plantPartUsed',
        'officialStatus',
        'primaryProcessing',
        'secondaryProcessing',
        'herbalDruglImage',
    ]

    return (
        <div className="space-y-6 overflow-x-auto w-full">
            <h1 className="text-2xl font-bold">Herbal Drug Backgrounds</h1>

            {isAdmin && (
                <div className="flex flex-wrap gap-3 border rounded-md p-4">
                    <Input placeholder="Pinyin" value={newItem.herbalDrugPinyin || ''} onChange={(e) => setNewItem((p) => ({ ...p, herbalDrugPinyin: e.target.value }))} />
                    <Input placeholder="Plant Scientific Name" value={newItem.plantScientificName || ''} onChange={(e) => setNewItem((p) => ({ ...p, plantScientificName: e.target.value }))} />
                    <Input placeholder="Pharmaceutical Name" value={newItem.pharmaceuticalName || ''} onChange={(e) => setNewItem((p) => ({ ...p, pharmaceuticalName: e.target.value }))} />
                    <Textarea placeholder="Harvesting Note" value={newItem.harvestingTimeNote || ''} onChange={(e) => setNewItem((p) => ({ ...p, harvestingTimeNote: e.target.value }))} />
                    {/* <Select onValueChange={(val: string) => setNewItem((p) => ({ ...p, harvestingTime: [val] }))}>
                        <SelectTrigger>
                            <SelectValue placeholder="Harvesting Time (Months)" />
                        </SelectTrigger>
                        <SelectContent>
                            {MONTHS.map((month) => (
                                <SelectItem key={month} value={month}>{month}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select> */}
                    <select
                        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={newItem.harvestingTime?.[0] || ''}
                        onChange={e => setNewItem(p => ({ ...p, harvestingTime: [e.target.value] }))}
                    >
                        <option value="" disabled>
                            Harvesting Time (Months)
                        </option>
                        {MONTHS.map(month => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <label className="flex items-center space-x-2">
                        {/* <Checkbox checked={newItem.officialStatus || false} onCheckedChange={(val: boolean) => setNewItem((p) => ({ ...p, officialStatus: !!val }))} /> */}
                        <input
                            type="checkbox"
                            checked={!!newItem.officialStatus}
                            onChange={(e) => setNewItem((p) => ({ ...p, officialStatus: e.target.checked }))}
                            className="h-4 w-4 rounded border-gray-300 text-teal-600"
                        />
                        <span>Official</span>
                    </label>
                    <Button onClick={handleCreate}>Add</Button>
                </div>
            )}

            <Table>
                <TableHeader>
                    <TableRow>
                        {columnKeys.map((key) => (
                            <TableHead key={key}>
                                <div className="flex gap-2 items-center">
                                    <span onClick={() => {
                                        setSortKey(key)
                                        setSortAsc(prev => key === sortKey ? !prev : true)
                                    }} className="cursor-pointer">
                                        {key} {sortKey === key && (sortAsc ? '▲' : '▼')}
                                    </span>
                                    <Button variant="ghost" size="sm" onClick={() => setShowFilterInput(prev => ({ ...prev, [key]: !prev[key] }))}>
                                        <Search className="w-4 h-4" />
                                    </Button>
                                </div>
                                {showFilterInput[key] && (
                                    <Input placeholder="Filter..." value={columnFilters[key] || ''} onChange={(e) => setColumnFilters(prev => ({ ...prev, [key]: e.target.value }))} />
                                )}
                            </TableHead>
                        ))}
                        <TableHead>Sourcing Backgrounds</TableHead>
                        {isAdmin && <TableHead>Actions</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pagedItems.map((item) => (
                        <TableRow key={item.id}>
                            {columnKeys.map((key) => (
                                <TableCell key={key}>
                                    {editingId === item.id ? (
                                        <Textarea
                                            value={Array.isArray(editBuffer[key]) ? (editBuffer[key] as string[]).join(', ') : (editBuffer[key] as string) || ''}
                                            onChange={(e) => {
                                                const val = e.target.value
                                                handleEditChange(key, key === 'harvestingTime' ? val.split(',').map(s => s.trim()) : val)
                                            }}
                                        />
                                    ) : (
                                        Array.isArray(item[key]) ? item[key].join(', ') : item[key]?.toString()
                                    )}
                                </TableCell>
                            ))}
                            <TableCell>{item.sourcingBackgrounds?.id || ''}</TableCell>
                            {isAdmin && (
                                <TableCell>
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

            <div className="flex justify-between pt-4">
                <span className="text-sm">Page {page} of {totalPages}</span>
                <div className="space-x-2">
                    <Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</Button>
                    <Button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
                </div>
            </div>
        </div>
    )
}
