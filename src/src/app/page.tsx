import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-line-subtle bg-bg-surface px-3 py-1 text-sm text-text-secondary">
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* Top nav (minimal) */}
      <div className="sticky top-0 z-20 border-b border-line-subtle bg-bg-primary/80 backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <div className="text-sm font-semibold tracking-tight text-text-primary">
            YourBrand
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="#how">How it works</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/demo">Get a demo</Link>
            </Button>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Section>
        <Container>
          <div className="mx-auto max-w-[800px] text-center">
            <Kicker>Calm, structured AI for serious operators</Kicker>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl">
              A superpowered teammate for high-stakes workflows.
            </h1>

            <p className="mx-auto mt-5 max-w-[720px] text-pretty text-lg leading-relaxed text-text-secondary">
              Turn messy inputs into structured outputs, with guardrails,
              accountability, and a UI that stays out of the way.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primaryHover">
                Request a demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#proof">See proof</Link>
              </Button>
            </div>

            {/* Social proof band */}
            <div className="mt-12 rounded-lg border border-line-subtle bg-bg-surface p-6">
              <div className="text-xs font-medium uppercase tracking-wide text-text-muted">
                Trusted by teams who ship
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 opacity-80 sm:grid-cols-4">
                {["Acme", "Northwind", "Umbrella", "Globex"].map((x) => (
                  <div
                    key={x}
                    className="flex h-10 items-center justify-center rounded-md border border-line-subtle bg-bg-primary text-sm font-medium text-text-secondary"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem framing */}
      <Section variant="alt" id="how">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Less noise. More signal.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-text-secondary">
              Most AI demos feel impressive but fail under real constraints:
              latency, trust, auditability, and human handoffs.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Structured outputs",
                body: "Every result is editable, attributable, and ready to ship into downstream work.",
              },
              {
                title: "Guardrails by default",
                body: "Clear failure modes, retries, and safe fallbacks—no mystery boxes.",
              },
              {
                title: "Operator UX",
                body: "Typography and whitespace carry the UI so teams can think clearly.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-line-subtle">
                <CardHeader>
                  <CardTitle className="text-xl text-text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-text-secondary">
                  {item.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Proof / testimonials */}
      <Section id="proof">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="max-w-[720px]">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
                Built for outcomes, not theater.
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-text-secondary">
                Calm design, strong hierarchy, and disciplined language—so buyers
                trust what they’re seeing.
              </p>
              <div className="mt-6 flex gap-3">
                <Button className="bg-brand-primary hover:bg-brand-primaryHover" asChild>
                  <Link href="/demo">Talk to us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#how">How it works</Link>
                </Button>
              </div>
            </div>

            <Card className="border-line-subtle">
              <CardHeader>
                <CardTitle className="text-xl text-text-primary">
                  “Feels like an internal tool we’d build ourselves.”
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-text-secondary">
                <p>
                  The UI stays quiet while the system stays accountable. Clear
                  states, structured outputs, and no hype.
                </p>
                <div className="pt-2 text-sm text-text-muted">
                  Ops Lead • Mid-market B2B
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <div className="border-t border-line-subtle bg-bg-primary">
        <Container className="flex flex-col gap-3 py-10 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} YourBrand</div>
          <div className="flex gap-4">
            <Link className="hover:text-text-secondary" href="/demo">Demo</Link>
            <Link className="hover:text-text-secondary" href="#">Privacy</Link>
          </div>
        </Container>
      </div>
    </main>
  );
}