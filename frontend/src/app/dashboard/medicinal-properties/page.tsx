// app/dashboard/medicinal-properties/page.tsx
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

interface MedicinalProperty {
  id: number
  pharmaceuticalName?: string
  herbalDrugPinyin?: string
  taste?: string[]
  energyFlow?: string[]
  meridians?: string[]
  actions?: string
  pharmacologicalProperties?: string[]
  indications?: string[]
  toxicity?: string
  secondaryMetabolites?: string
}

type SortKey = keyof MedicinalProperty

export default function MedicinalPropertiesPage() {
  const [items, setItems] = useState<MedicinalProperty[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editBuffer, setEditBuffer] = useState<Partial<MedicinalProperty>>({})
  const [newItem, setNewItem] = useState<Partial<MedicinalProperty>>({})
  const [page, setPage] = useState(1)
  const [columnFilters, setColumnFilters] = useState<Partial<Record<SortKey, string>>>({})
  const [showFilterInput, setShowFilterInput] = useState<Record<string, boolean>>({})
  const [sortKey, setSortKey] = useState<SortKey>('id')
  const [sortAsc, setSortAsc] = useState(true)
  const { accessToken, user } = useAuthStore()
  const router = useRouter()
  const pageSize = 30
  const isAdmin = user?.role === 'ADMIN'
  const endpoint = '/api/proxy/api/v1/medicinal-properties'

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

  const handleColumnFilter = (key: SortKey, value: string) => {
    setColumnFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleEditChange = (key: keyof MedicinalProperty, value: unknown) => {
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
      toast.success('Updated')
      const updated = await res.json()
      setItems((prev) => prev.map((it) => (it.id === id ? updated.data : it)))
      setEditingId(null)
    } catch (err) {
      toast.error('Error updating')
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure?')) return
    try {
      const res = await fetch(`${endpoint}/${id}`, {
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
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          ...newItem,
          taste: newItem.taste?.join(',') ?? '',
          energyFlow: newItem.energyFlow?.join(',') ?? '',
          meridians: newItem.meridians?.join(',') ?? '',
          pharmacologicalProperties: newItem.pharmacologicalProperties?.join(',') ?? '',
          indications: newItem.indications?.join(',') ?? '',
        }),
      })
      if (!res.ok) throw new Error('Create failed')
      toast.success('Created')
      const created = await res.json()
      setItems((prev) => [...prev, created.data])
      setNewItem({})
    } catch (err) {
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
    'id', 'pharmaceuticalName', 'herbalDrugPinyin', 'taste', 'energyFlow', 'meridians',
    'actions', 'pharmacologicalProperties', 'indications', 'toxicity', 'secondaryMetabolites']

  return (
    <div className="space-y-6 overflow-x-auto w-full">
      <h1 className="text-2xl font-bold">Medicinal Properties</h1>

      {isAdmin && (
        <div className="flex flex-wrap gap-2 border-2 rounded-md p-6">
          {columnKeys.filter(k => k !== 'id').map((key) => (
            <Input key={key} placeholder={key} value={(newItem[key] as string) || ''} onChange={(e) => setNewItem((p) => ({ ...p, [key]: e.target.value }))} />
          ))}
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
                  <Button variant="ghost" size='sm' onClick={() => setShowFilterInput(prev => ({ ...prev, [key]: !prev[key] }))}>
                    <Search className="text-gray-500 w-4 h-4" />
                  </Button>
                </div>
                {showFilterInput[key] && (
                  <Input className="mt-1" placeholder="Search..." value={columnFilters[key] || ''} onChange={(e) => handleColumnFilter(key, e.target.value)} />
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
                    <Textarea value={Array.isArray(editBuffer[key]) ? (editBuffer[key] as string[]).join(', ') : (editBuffer[key] as string) || ''} onChange={(e) => {
                      const value = e.target.value
                      const isArrayField = ['taste', 'energyFlow', 'meridians', 'pharmacologicalProperties', 'indications'].includes(key)
                      handleEditChange(key, isArrayField ? value.split(',').map(s => s.trim()) : value)
                    }} />
                  ) : (
                    Array.isArray(item[key]) ? (item[key] as string[]).join(', ') : item[key] || ''
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
