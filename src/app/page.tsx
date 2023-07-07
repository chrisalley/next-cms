'use client'

import { ReactElement } from 'react'
import { SessionProvider } from 'next-auth/react'
import LoginToggle from '@/components/login-toggle'

export default function Home(): ReactElement {
  return (
    <SessionProvider>
      <LoginToggle />
    </SessionProvider>
  )
}
