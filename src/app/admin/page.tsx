import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { DemoRequestsTable } from '@/components/admin/DemoRequestsTable'
import { AdminHeader } from '@/components/admin/AdminHeader'

export default async function AdminPage() {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    redirect('/auth/login')
  }

  const { data: demoRequests, error: requestsError } = await supabase
    .from('demo_requests')
    .select('*')
    .order('created_at', { ascending: false })

  if (requestsError) {
    console.error('Error fetching demo requests:', requestsError)
  }

  return (
    <main>
      <AdminHeader user={userData.user} />
      <Section>
        <Container>
          <div className="mb-8">
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Demo Requests
            </h1>
            <p className="mt-2 text-lg text-text-secondary">
              Manage and track incoming demo requests from potential customers.
            </p>
          </div>
          <DemoRequestsTable initialRequests={demoRequests || []} />
        </Container>
      </Section>
    </main>
  )
}
