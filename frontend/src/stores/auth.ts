import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface User {
  id: string
  username: string
  role: string
  isActive: boolean
}

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  _hasHydrated: boolean
  setHasHydrated: (value: boolean) => void
  login: (data: { user: User; accessToken: string; refreshToken: string }) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      _hasHydrated: false,
      setHasHydrated: (value) => set({ _hasHydrated: value }),
      login: ({ user, accessToken, refreshToken }) =>
        set({ user, accessToken, refreshToken }),
      logout: () => set({ user: null, accessToken: null, refreshToken: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
      onRehydrateStorage: () => () => {
        useAuthStore.getState().setHasHydrated(true)
      },
    }
  )
)

export function useAuthHydrated() {
  return useAuthStore((s) => s._hasHydrated)
}
