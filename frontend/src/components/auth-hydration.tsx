'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/stores/auth'

export function AuthHydration({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const unsub = useAuthStore.persist.onFinishHydration(() => {
      useAuthStore.getState().setHasHydrated(true)
    })

    if (useAuthStore.persist.hasHydrated()) {
      useAuthStore.getState().setHasHydrated(true)
    } else {
      useAuthStore.persist.rehydrate()
    }

    return unsub
  }, [])

  return <>{children}</>
}
