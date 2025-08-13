'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/auth'
import Link from 'next/link'

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

      <div className='text-gray-600 text-2xl inline-block bg-gradient-to-r from-teal-200 to-blue-400 p-6'> For Data Visualization Later</div>

      {/* <div className="mt-6">
        <ul className="list-disc ml-6 mt-2 text-blue-600 space-y-1">
          {user.role === 'ADMIN' && (
            <li>
              <Link href="/dashboard/users" className=' hover:underline'>Manage Users</Link>
            </li>
          )}
          <hr />
          <span className="text-gray-600">Plant</span>
           <li> <Link href="/dashboard/plant-taxonomy" className=' hover:underline'>Plant Taxonomy</Link>
          </li>

           <hr />
          <span className="text-gray-600 mt-2">Herbal Drug</span>
        </ul>
      </div> */}
    </div>
  )
}
