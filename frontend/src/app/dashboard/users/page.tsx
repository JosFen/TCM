// app/dashboard/users/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  username: string
  role: string
  isActive: boolean
  password?: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [editingUserId, setEditingUserId] = useState<string | null>(null)
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1)
  const [showInactive, setShowInactive] = useState(true)
  const [hydrated, setHydrated] = useState(false)
  const pageSize = 10
  const { accessToken, user } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    if (!user || user.role !== 'ADMIN') {
      router.push('/dashboard')
      return
    }

    fetch('/api/proxy/api/v1/users', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then(setUsers)
  }, [accessToken, router, user, hydrated])

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.username.toLowerCase().includes(filter.toLowerCase()) ||
      u.role.toLowerCase().includes(filter.toLowerCase())
    const isVisible = showInactive || u.isActive
    return matchesSearch && isVisible
  })

  const pagedUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize)
  const totalPages = Math.ceil(filteredUsers.length / pageSize)

  const handleUpdate = (id: string, updates: Partial<User>) => {
    fetch(`/api/proxy/api/v1/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updates),
    })
      .then(() => {
        setUsers((prev) =>
          prev.map((u) => (u.id === id ? { ...u, ...updates } : u))
        )
        setEditingUserId(null)
        toast.success('User updated successfully')
      })
  }

  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const handleCreate = () => {
    fetch(`/api/proxy/api/v1/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ username: newUsername, password: newPassword }),
    })
      .then((res) => res.json())
      .then((created) => {
        setUsers((prev) => [...prev, created])
        setNewUsername('')
        setNewPassword('')
        toast.success('User created')
      })
  }

  if (!hydrated || !user || user.role !== 'ADMIN') return null

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>

      <div className="flex items-center gap-4">
        <Input className='w-1/3' placeholder="Search by username or role..." value={filter} onChange={(e) => setFilter(e.target.value)} />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={showInactive} onChange={(e) => setShowInactive(e.target.checked)} />
          Show Inactive
        </label>
        <div className="flex gap-2">
          <Input placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
          <Input placeholder="Password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <Button onClick={handleCreate}>Add User</Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pagedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                {editingUserId === user.id ? (
                  <Input
                    value={user.username}
                    onChange={(e) =>
                      setUsers((prev) =>
                        prev.map((u) => (u.id === user.id ? { ...u, username: e.target.value } : u))
                      )
                    }
                  />
                ) : (
                  user.username
                )}
              </TableCell>
              <TableCell>
                {editingUserId === user.id ? (
                  <select
                    value={user.role}
                    onChange={(e) =>
                      setUsers((prev) =>
                        prev.map((u) => (u.id === user.id ? { ...u, role: e.target.value } : u))
                      )
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                ) : (
                  user.role
                )}
              </TableCell>
              <TableCell>
                {editingUserId === user.id ? (
                  <input
                    type="checkbox"
                    checked={user.isActive}
                    onChange={(e) =>
                      setUsers((prev) =>
                        prev.map((u) => (u.id === user.id ? { ...u, isActive: e.target.checked } : u))
                      )
                    }
                  />
                ) : user.isActive ? (
                  'Active'
                ) : (
                  'Inactive'
                )}
              </TableCell>
              <TableCell>
                {editingUserId === user.id ? (
                  <Input
                    type="password"
                    placeholder="New password"
                    onChange={(e) =>
                      setUsers((prev) =>
                        prev.map((u) => (u.id === user.id ? { ...u, password: e.target.value } : u))
                      )
                    }
                  />
                ) : (
                  '••••••'
                )}
              </TableCell>
              <TableCell className="space-x-2">
                {editingUserId === user.id ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => {
                        const { username, isActive, password, role } = user
                        const updates: Partial<User> = {}
                        if (username) updates.username = username
                        if (typeof isActive === 'boolean') updates.isActive = isActive
                        if (password) updates.password = password
                        if (role) updates.role = role
                        handleUpdate(user.id, updates)
                      }}
                    >
                      Save
                    </Button>
                    <Button variant="ghost" onClick={() => setEditingUserId(null)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" onClick={() => setEditingUserId(user.id)}>
                    Edit
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Showing page {page} of {totalPages}
        </p>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Previous</Button>
          <Button variant="outline" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
        </div>
      </div>
    </div>
  )
}