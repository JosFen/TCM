'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/auth'
import { Button } from '@/components/ui/button'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/auth')
  }

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4 space-y-4 flex flex-col justify-center">
        <div>
          <h2 className="font-bold mb-4">Admin Menu</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/dashboard">Dashboard</Link>
            {user?.role === 'ADMIN' && (
              <Link href="/dashboard/users">Users</Link>
            )}
          </nav>
        </div>
        <hr className="my-4" />
        <div className="space-y-4">
          <p className="text-xs">Logged in as: {user?.username}</p>
          <Button variant="destructive" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  )
}
