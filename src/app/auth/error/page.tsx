import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold text-text-primary">
              Franchir
            </Link>
            <p className="mt-2 text-sm text-text-secondary">Admin Portal</p>
          </div>
          <Card className="border-line-subtle">
            <CardHeader>
              <CardTitle className="text-2xl text-text-primary">
                Sorry, something went wrong
              </CardTitle>
            </CardHeader>
            <CardContent>
              {params?.error ? (
                <p className="text-sm text-text-secondary">
                  Error: {params.error}
                </p>
              ) : (
                <p className="text-sm text-text-secondary">
                  An unspecified error occurred.
                </p>
              )}
              <div className="mt-4 text-center">
                <Link
                  href="/auth/login"
                  className="text-sm text-brand-primary underline underline-offset-4 hover:text-brand-primaryHover"
                >
                  Back to login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
