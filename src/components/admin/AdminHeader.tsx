'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'

interface AdminHeaderProps {
  user: User
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  return (
    <header className="border-b border-line-subtle bg-bg-surface py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold text-text-primary">
              Franchir
            </Link>
            <span className="text-sm text-text-muted">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary">{user.email}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-line-subtle text-text-secondary hover:bg-bg-section-alt"
            >
              Logout
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
