// app/dashboard/plant-taxonomy/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface PlantTaxonomy {
  id: number
  class?: string
  family: string
  vascular?: boolean
}

type SortKey = keyof PlantTaxonomy

export default function PlantTaxonomyPage() {
  const [items, setItems] = useState<PlantTaxonomy[]>([])
  const [newItem, setNewItem] = useState<Partial<PlantTaxonomy>>({})
  const [editingId, setEditingId] = useState<number | null>(null)
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('id')
  const [sortAsc, setSortAsc] = useState(true)
  const [page, setPage] = useState(1)
  const pageSize = 30

  const { accessToken, user } = useAuthStore()
  const router = useRouter()
  const isAdmin = user?.role === 'ADMIN'

  useEffect(() => {
    if (!user) router.push('/auth')
  }, [user, router])

  useEffect(() => {
    fetch('/api/proxy/api/v1/plant-taxonomies', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data)
        } else if (Array.isArray(data.taxonomies)) {
          setItems(data.taxonomies)
        } else {
          console.error('Unexpected response:', data)
          setItems([])
        }
      })
  }, [accessToken])

  const handleCreate = () => {
    fetch('/api/proxy/api/v1/plant-taxonomies', {
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

  const handleUpdate = (id: number, updates: Partial<PlantTaxonomy>) => {
    fetch(`/api/proxy/api/v1/plant-taxonomies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updates),
    })
      .then(() => {
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)))
        setEditingId(null)
        toast.success('Updated successfully')
      })
  }

  const handleDelete = (id: number) => {
    fetch(`/api/proxy/api/v1/plant-taxonomies/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(() => {
        setItems((prev) => prev.filter((item) => item.id !== id))
        toast.success('Deleted')
      })
  }

  const filteredSortedItems = [...items]
    .filter((item) =>
      item.class?.toLowerCase().includes(search.toLowerCase()) ||
      item.family.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]
      if (sortKey === 'id') {
        return sortAsc ? a.id - b.id : b.id - a.id
      } else if (sortKey === 'vascular') {
        return sortAsc
          ? Number(Boolean(aVal)) - Number(Boolean(bVal))
          : Number(Boolean(bVal)) - Number(Boolean(aVal))
      } else {
        return sortAsc
          ? ('' + aVal).localeCompare('' + bVal)
          : ('' + bVal).localeCompare('' + aVal)
      }
    })

  const totalPages = Math.ceil(filteredSortedItems.length / pageSize)
  const pagedItems = filteredSortedItems.slice((page - 1) * pageSize, page * pageSize)

  if (!user) return null

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Plant Taxonomy</h1>
      {isAdmin && (
        <div className="flex gap-2 border-2 rounded-md p-4">
          <Input placeholder="Class" value={newItem.class || ''} onChange={(e) => setNewItem((p) => ({ ...p, class: e.target.value }))} />
          <Input placeholder="Family" value={newItem.family || ''} onChange={(e) => setNewItem((p) => ({ ...p, family: e.target.value }))} />
          <label className="flex items-center gap-1">
            <input type="checkbox" checked={newItem.vascular || false} onChange={(e) => setNewItem((p) => ({ ...p, vascular: e.target.checked }))} />
            Vascular
          </label>
          <Button onClick={handleCreate}>Add</Button>
        </div>
      )}
      
      <hr />

      <Input
        placeholder="Search by class or family..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table>
        <TableHeader>
          <TableRow>
            {(['id', 'class', 'family', 'vascular'] as SortKey[]).map((key) => (
              <TableHead
                key={key}
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setSortKey(key)
                  setSortAsc((prev) => (key === sortKey ? !prev : true))
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                {sortKey === key ? (sortAsc ? ' ▲' : ' ▼') : ''}
              </TableHead>
            ))}
            {isAdmin && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {pagedItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                {editingId === item.id ? (
                  <Input value={item.class || ''} onChange={(e) => setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, class: e.target.value } : i)))} />
                ) : (
                  item.class || '-'
                )}
              </TableCell>
              <TableCell>
                {editingId === item.id ? (
                  <Input value={item.family} onChange={(e) => setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, family: e.target.value } : i)))} />
                ) : (
                  item.family
                )}
              </TableCell>
              <TableCell>
                {editingId === item.id ? (
                  <input
                    type="checkbox"
                    checked={item.vascular || false}
                    onChange={(e) =>
                      setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, vascular: e.target.checked } : i)))
                    }
                  />
                ) : item.vascular ? (
                  'Yes'
                ) : (
                  'No'
                )}
              </TableCell>
              {isAdmin && (
                <TableCell className="space-x-2">
                  {editingId === item.id ? (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleUpdate(item.id, item)}
                      >
                        Save
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="sm" variant="outline" onClick={() => setEditingId(item.id)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
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
