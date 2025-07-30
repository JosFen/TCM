'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/auth'

export default function DashboardPage() {
  const { user } = useAuthStore()
  const router = useRouter()
  const [hydrated, setHydrated] = useState(false)
  

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated && !user) {
      router.push('/auth')
    }
  }, [hydrated, user, router])

  if (!hydrated || !user) return null 

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome, {user.username}</h1>
      <p className="text-gray-600">Role: {user.role}</p>

      {user.role === 'ADMIN' && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Admin Tools</h2>
          <ul className="list-disc ml-6 mt-2 text-blue-600">
            <li><a href="/dashboard/users">Manage Users</a></li>
            {/* Add more admin-specific links here */}
          </ul>
        </div>
      )}
    </div>
  )
}
