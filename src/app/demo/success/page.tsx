import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DemoSuccessPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="mx-auto max-w-[540px]">
            <Card className="border-line-subtle text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-text-primary">
                  Request received!
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  We&apos;ll be in touch within 1–2 business days.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-text-secondary">
                  Thank you for your interest in Franchir. Our team will review your
                  request and reach out with a personalized demo plan tailored to
                  your franchise operations.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline" className="border-line-subtle">
                    <Link href="/">Back to home</Link>
                  </Button>
                  <Button asChild className="bg-brand-primary hover:bg-brand-primaryHover">
                    <Link href="/demo">Submit another request</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
