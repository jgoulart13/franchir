'use client'

import * as React from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface DemoRequest {
  id: string
  name: string
  email: string
  company: string
  status: string
  notes: string | null
  created_at: string
  updated_at: string
}

interface DemoRequestsTableProps {
  initialRequests: DemoRequest[]
}

const statusColors: Record<string, string> = {
  pending: 'bg-semantic-warning-subtle text-semantic-warning',
  contacted: 'bg-semantic-info-subtle text-semantic-info',
  scheduled: 'bg-brand-primarySubtle text-brand-primary',
  completed: 'bg-semantic-success-subtle text-semantic-success',
  declined: 'bg-semantic-error-subtle text-semantic-error',
}

export function DemoRequestsTable({ initialRequests }: DemoRequestsTableProps) {
  const [requests, setRequests] = React.useState<DemoRequest[]>(initialRequests)
  const [updating, setUpdating] = React.useState<string | null>(null)

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdating(id)
    const supabase = createClient()

    const { error } = await supabase
      .from('demo_requests')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', id)

    if (!error) {
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id
            ? { ...req, status: newStatus, updated_at: new Date().toISOString() }
            : req
        )
      )
    }
    setUpdating(null)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (requests.length === 0) {
    return (
      <Card className="border-line-subtle p-8 text-center">
        <p className="text-text-secondary">No demo requests yet.</p>
        <p className="mt-2 text-sm text-text-muted">
          Demo requests submitted through the form will appear here.
        </p>
      </Card>
    )
  }

  return (
    <Card className="border-line-subtle overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-line-subtle hover:bg-transparent">
            <TableHead className="text-text-secondary">Name</TableHead>
            <TableHead className="text-text-secondary">Email</TableHead>
            <TableHead className="text-text-secondary">Company</TableHead>
            <TableHead className="text-text-secondary">Status</TableHead>
            <TableHead className="text-text-secondary">Submitted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id} className="border-line-subtle">
              <TableCell className="font-medium text-text-primary">
                {request.name}
              </TableCell>
              <TableCell className="text-text-secondary">
                <a
                  href={`mailto:${request.email}`}
                  className="text-brand-primary hover:underline"
                >
                  {request.email}
                </a>
              </TableCell>
              <TableCell className="text-text-secondary">
                {request.company}
              </TableCell>
              <TableCell>
                <Select
                  value={request.status}
                  onValueChange={(value) => updateStatus(request.id, value)}
                  disabled={updating === request.id}
                >
                  <SelectTrigger className="w-[130px] border-line-subtle">
                    <SelectValue>
                      <Badge
                        variant="secondary"
                        className={statusColors[request.status] || ''}
                      >
                        {request.status}
                      </Badge>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="declined">Declined</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-text-muted">
                {formatDate(request.created_at)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
