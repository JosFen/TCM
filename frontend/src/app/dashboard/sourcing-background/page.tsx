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

const HARVESTING_PRACTICES = ['CULTIVATED', 'WILD_HARVESTED']

interface HerbalDrug {
    id: number
    plant: {
        plantScientificName: string
        plantCommonName?: string
    }
    medicinalProperty: {
        pharmaceuticalName: string
    }
}

interface SourcingBackground {
    id: number
    herbalDrugId: number
    cultivationStatus?: boolean
    cultivationRegions?: string
    wildHarvestingRegions?: string
    harvestingPractice: string[]
    harvestingPracticeNote?: string
    daodiStatus?: boolean
    daodiRegions?: string
    productionRegions?: string
    herbalDrug?: HerbalDrug
}

type SortKey = keyof SourcingBackground

export default function SourcingBackgroundPage() {
    const [items, setItems] = useState<SourcingBackground[]>([])
    const [herbalDrugs, setHerbalDrugs] = useState<HerbalDrug[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editBuffer, setEditBuffer] = useState<Partial<SourcingBackground>>({})
    const [newItem, setNewItem] = useState<Partial<SourcingBackground>>({})
    const [page, setPage] = useState(1)
    const [columnFilters, setColumnFilters] = useState<Partial<Record<SortKey, string>>>({})
    const [showFilterInput, setShowFilterInput] = useState<Record<string, boolean>>({})
    const [sortKey, setSortKey] = useState<SortKey>('id')
    const [sortAsc, setSortAsc] = useState(true)
    const { accessToken, user } = useAuthStore()
    const router = useRouter()
    const pageSize = 30
    const isAdmin = user?.role === 'ADMIN'
    const endpoint = '/api/proxy/api/v1/sourcing-backgrounds'
    const herbalDrugEndpoint = '/api/proxy/api/v1/herbal-drug-backgrounds'

    useEffect(() => {
        if (!user) router.push('/auth')
    }, [user, router])

    useEffect(() => {
        // Fetch sourcing backgrounds
        fetch(endpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then((data) => Array.isArray(data.data) && setItems(data.data))

        // Fetch herbal drugs for dropdown
        fetch(herbalDrugEndpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then((data) => Array.isArray(data.data) && setHerbalDrugs(data.data))
    }, [accessToken])

    const handleEditChange = (key: keyof SourcingBackground, value: unknown) => {
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
        if (!newItem.herbalDrugId || !newItem.harvestingPractice || newItem.harvestingPractice.length === 0) {
            toast.error('Herbal Drug ID and at least one harvesting practice are required')
            return
        }
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

    const handleHarvestingPracticeChange = (practice: string, isNew = false) => {
        const setter = isNew ? setNewItem : setEditBuffer
        setter((prev) => {
            const current = prev.harvestingPractice || []
            const updated = current.includes(practice)
                ? current.filter(p => p !== practice)
                : [...current, practice]
            return { ...prev, harvestingPractice: updated }
        })
    }

    const filteredSortedItems = [...items]
        .filter((item) => {
            return Object.entries(columnFilters).every(([key, value]) => {
                const cell = item[key as SortKey]
                let searchValue = ''
                
                if (key === 'herbalDrugId' && item.herbalDrug) {
                    searchValue = `${item.herbalDrug.plant.plantScientificName} - ${item.herbalDrug.medicinalProperty.pharmaceuticalName}`
                } else if (Array.isArray(cell)) {
                    searchValue = cell.join(', ')
                } else {
                    searchValue = '' + (cell || '')
                }
                
                return searchValue.toLowerCase().includes(value.toLowerCase())
            })
        })
        .sort((a, b) => {
            const aVal = a[sortKey] ?? ''
            const bVal = b[sortKey] ?? ''
            if (sortKey === 'id' || sortKey === 'herbalDrugId') {
                return sortAsc ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number)
            }
            return sortAsc ? ('' + aVal).localeCompare('' + bVal) : ('' + bVal).localeCompare('' + aVal)
        })
        
    const totalPages = Math.ceil(filteredSortedItems.length / pageSize)
    const pagedItems = filteredSortedItems.slice((page - 1) * pageSize, page * pageSize)

    const columnKeys: SortKey[] = [
        'id',
        'herbalDrugId',
        'cultivationStatus',
        'cultivationRegions',
        'wildHarvestingRegions',
        'harvestingPractice',
        'harvestingPracticeNote',
        'daodiStatus',
        'daodiRegions',
        'productionRegions',
    ]

    const getDisplayValue = (item: SourcingBackground, key: SortKey) => {
        const value = item[key]
        
        if (key === 'herbalDrugId' && item.herbalDrug) {
            return `${item.herbalDrug.id} - ${item.herbalDrug.plant.plantScientificName} - ${item.herbalDrug.medicinalProperty.pharmaceuticalName}`
        }
        
        if (typeof value === 'boolean') {
            return value ? 'Yes' : 'No'
        }
        
        if (Array.isArray(value)) {
            return value.join(', ')
        }
        
        return value?.toString() || ''
    }

    return (
        <div className="space-y-6 overflow-x-auto w-full">
            <h1 className="text-2xl font-bold">Sourcing Backgrounds</h1>

            {isAdmin && (
                <div className="flex flex-wrap gap-3 border rounded-md p-4">
                    <select
                        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={newItem.herbalDrugId || ''}
                        onChange={(e) => setNewItem((p) => ({ ...p, herbalDrugId: parseInt(e.target.value) }))}
                    >
                        <option value="" disabled>Select Herbal Drug</option>
                        {herbalDrugs.map((drug) => (
                            <option key={drug.id} value={drug.id}>
                                {drug.id} - {drug.plant.plantScientificName} - {drug.medicinalProperty.pharmaceuticalName}
                            </option>
                        ))}
                    </select>

                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Harvesting Practice *</span>
                        <div className="flex gap-2">
                            {HARVESTING_PRACTICES.map((practice) => (
                                <label key={practice} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={(newItem.harvestingPractice || []).includes(practice)}
                                        onChange={() => handleHarvestingPracticeChange(practice, true)}
                                        className="h-4 w-4 rounded border-gray-300 text-teal-600"
                                    />
                                    <span className="text-sm">{practice.replace('_', ' ')}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <Input 
                        placeholder="Cultivation Regions" 
                        value={newItem.cultivationRegions || ''} 
                        onChange={(e) => setNewItem((p) => ({ ...p, cultivationRegions: e.target.value }))} 
                    />
                    
                    <Input 
                        placeholder="Wild Harvesting Regions" 
                        value={newItem.wildHarvestingRegions || ''} 
                        onChange={(e) => setNewItem((p) => ({ ...p, wildHarvestingRegions: e.target.value }))} 
                    />
                    
                    <Textarea 
                        placeholder="Harvesting Practice Note" 
                        value={newItem.harvestingPracticeNote || ''} 
                        onChange={(e) => setNewItem((p) => ({ ...p, harvestingPracticeNote: e.target.value }))} 
                    />
                    
                    <Input 
                        placeholder="Daodi Regions" 
                        value={newItem.daodiRegions || ''} 
                        onChange={(e) => setNewItem((p) => ({ ...p, daodiRegions: e.target.value }))} 
                    />
                    
                    <Input 
                        placeholder="Production Regions" 
                        value={newItem.productionRegions || ''} 
                        onChange={(e) => setNewItem((p) => ({ ...p, productionRegions: e.target.value }))} 
                    />

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={!!newItem.cultivationStatus}
                            onChange={(e) => setNewItem((p) => ({ ...p, cultivationStatus: e.target.checked }))}
                            className="h-4 w-4 rounded border-gray-300 text-teal-600"
                        />
                        <span>Cultivated</span>
                    </label>

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={!!newItem.daodiStatus}
                            onChange={(e) => setNewItem((p) => ({ ...p, daodiStatus: e.target.checked }))}
                            className="h-4 w-4 rounded border-gray-300 text-teal-600"
                        />
                        <span>Daodi</span>
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
                                    <span 
                                        onClick={() => {
                                            setSortKey(key)
                                            setSortAsc(prev => key === sortKey ? !prev : true)
                                        }} 
                                        className="cursor-pointer"
                                    >
                                        {key === 'herbalDrugId' ? 'Herbal Drug' : key} {sortKey === key && (sortAsc ? '▲' : '▼')}
                                    </span>
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        onClick={() => setShowFilterInput(prev => ({ ...prev, [key]: !prev[key] }))}
                                    >
                                        <Search className="w-4 h-4" />
                                    </Button>
                                </div>
                                {showFilterInput[key] && (
                                    <Input 
                                        placeholder="Filter..." 
                                        value={columnFilters[key] || ''} 
                                        onChange={(e) => setColumnFilters(prev => ({ ...prev, [key]: e.target.value }))} 
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
                                        key === 'harvestingPractice' ? (
                                            <div className="flex gap-2">
                                                {HARVESTING_PRACTICES.map((practice) => (
                                                    <label key={practice} className="flex items-center space-x-1">
                                                        <input
                                                            type="checkbox"
                                                            checked={(editBuffer.harvestingPractice || []).includes(practice)}
                                                            onChange={() => handleHarvestingPracticeChange(practice)}
                                                            className="h-3 w-3"
                                                        />
                                                        <span className="text-xs">{practice.replace('_', ' ')}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        ) : key === 'cultivationStatus' || key === 'daodiStatus' ? (
                                            <input
                                                type="checkbox"
                                                checked={!!(editBuffer[key])}
                                                onChange={(e) => handleEditChange(key, e.target.checked)}
                                                className="h-4 w-4"
                                            />
                                        ) : key === 'herbalDrugId' ? (
                                            <select
                                                className="border rounded px-2 py-1 text-sm w-full"
                                                value={editBuffer.herbalDrugId || ''}
                                                onChange={(e) => handleEditChange(key, parseInt(e.target.value))}
                                            >
                                                <option value="" disabled>Select Herbal Drug</option>
                                                {herbalDrugs.map((drug) => (
                                                    <option key={drug.id} value={drug.id}>
                                                        {drug.id} - {drug.plant.plantScientificName} - {drug.medicinalProperty.pharmaceuticalName}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <Textarea
                                                value={editBuffer[key]?.toString() || ''}
                                                onChange={(e) => handleEditChange(key, e.target.value)}
                                                className="min-h-[2rem]"
                                            />
                                        )
                                    ) : (
                                        <div className="max-w-xs truncate" title={getDisplayValue(item, key)}>
                                            {getDisplayValue(item, key)}
                                        </div>
                                    )}
                                </TableCell>
                            ))}
                            {isAdmin && (
                                <TableCell>
                                    {editingId === item.id ? (
                                        <>
                                            <Button size="sm" onClick={() => handleUpdate(item.id)}>Save</Button>
                                            <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button 
                                                size="sm" 
                                                variant="outline" 
                                                onClick={() => { 
                                                    setEditingId(item.id); 
                                                    setEditBuffer(item) 
                                                }}
                                            >
                                                Edit
                                            </Button>
                                            <Button 
                                                size="sm" 
                                                variant="destructive" 
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                Delete
                                            </Button>
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