'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/auth'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const login = useAuthStore((s) => s.login)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/proxy/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (res.ok) {
      const data = await res.json()
      login({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      })
      router.push('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
          required
          className='border p-2 rounded'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
          required
          className='border p-2 rounded'
        />
        <button className="bg-blue-600 text-white py-2 rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}
