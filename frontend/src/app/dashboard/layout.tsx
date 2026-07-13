'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore, useAuthHydrated } from '@/stores/auth'
import { Button } from '@/components/ui/button'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)
  const hydrated = useAuthHydrated()
  const router = useRouter()

  useEffect(() => {
    if (hydrated && !user) {
      router.replace('/auth')
    }
  }, [hydrated, user, router])

  const handleLogout = () => {
    logout()
    router.push('/auth')
  }

  if (!hydrated) {
    return (
      <div className="flex h-screen items-center justify-center text-neutral-600">
        Loading session…
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4 space-y-4 flex flex-col justify-center">
        <div>
          <h2 className="font-bold mb-4">Admin Menu</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/dashboard" className=' hover:text-blue-700 hover:underline'>Dashboard</Link>
            {user.role === 'ADMIN' && (
              <Link href="/dashboard/users" className=' hover:text-blue-700 hover:underline'>Users</Link>
            )}

            <Link href="/dashboard/plant-taxonomy" className=' hover:text-blue-700 hover:underline'>Plant Taxonomy</Link>
            <Link href="/dashboard/plant-nomenclature" className=' hover:text-blue-700 hover:underline'>Plant Nomenclature</Link>
            <Link href="/dashboard/plant-synonym" className=' hover:text-blue-700 hover:underline'>Plant Synonym</Link>
            <Link href="/dashboard/plant-morphology" className=' hover:text-blue-700 hover:underline'>Plant Morphology</Link>
            <Link href="/dashboard/plant-ecology-distribution" className=' hover:text-blue-700 hover:underline'>Plant Ecology Distribution</Link>
            <Link href="/dashboard/botanical-garden" className=' hover:text-blue-700 hover:underline'>Botanical Garden</Link>
            <Link href="/dashboard/medicinal-properties" className=' hover:text-blue-700 hover:underline'>Medicinal Properties</Link>
            <Link href="/dashboard/herbal-drug-background" className=' hover:text-blue-700 hover:underline'>Herbal Drug Background</Link>
            <Link href="/dashboard/sourcing-background" className=' hover:text-blue-700 hover:underline'>Sourcing Background</Link>
            <Link href="/dashboard/ethnobotany" className=' hover:text-blue-700 hover:underline'>Ethnobotany</Link>
          </nav>
        </div>
        <hr className="my-4" />
        <div className="space-y-4">
          <p className="text-xs">Logged in as: {user.username}</p>
          <Button variant="destructive" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  )
}
