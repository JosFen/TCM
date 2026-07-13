'use client'

import Link from 'next/link'
import { useAuthStore, useAuthHydrated } from '@/stores/auth'

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user)
  const hydrated = useAuthHydrated()

  if (!hydrated || !user) return null

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome, {user.username}</h1>
      <p className="text-gray-600">Role: {user.role}</p>

      <div className='text-gray-600 text-2xl inline-block bg-gradient-to-r from-teal-200 to-blue-400 p-6'>
        For Data Visualization Later
      </div>
    </div>
  )
}
