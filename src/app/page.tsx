import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-line-subtle bg-bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wide text-text-muted">
      {children}
    </div>
  );
}

function FeatureChip({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-line-subtle bg-bg-surface px-3 py-1 text-xs text-text-secondary">
      {label}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* Top nav, denser like Campfire */}
      <div className="sticky top-0 z-20 border-b border-line-subtle bg-bg-primary/90 backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Logo: interlocking L shapes — partnership, connection (wide, not square) */}
            <svg
              width="32"
              height="22"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              aria-hidden
            >
              <path d="M2 2h6v16h16v6H2V2z" className="fill-brand-primary" />
              <path d="M12 2h16v6h6v16h-6V8H12V2z" className="fill-brand-primaryHover" />
            </svg>
            <div className="text-sm font-semibold tracking-tight text-text-primary">
              Franchir
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <nav className="hidden items-center gap-4 text-text-secondary sm:flex">
              <Link href="#how" className="hover:text-text-primary">
                How it works
              </Link>
              <Link href="#product" className="hover:text-text-primary">
                Product
              </Link>
            </nav>
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/demo">Log in</Link>
            </Button>
            <Button
              size="sm"
              className="bg-brand-primary hover:bg-brand-primaryHover"
              asChild
            >
              <Link href="/demo">Get a demo</Link>
            </Button>
          </div>
        </Container>
      </div>

      {/* Hero: two-column, product-forward, on subtle brand-tinted background */}
      <div className="bg-brand-primarySubtle/60 border-b border-line-subtle">
        <Section>
          <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
            {/* Left: copy + CTAs */}
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                Superpower your{" "}
                <span className="text-brand-primary">franchise operations</span>.
              </h1>

              <p className="max-w-[540px] text-base font-normal leading-relaxed text-text-secondary">
                Restaurant specialists, AI engineers, and custom-built tools to build an AI-native franchise operations function.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primaryHover"
                  asChild
                >
                  <Link href="/demo">Get a demo</Link>
                </Button>
              </div>

              {/* Horizontal feature chips, echoing Campfire's use-cases strip */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-text-muted">
                <FeatureChip label="Real-time multi-location dashboards" />
                <FeatureChip label="Production planning widgets" />
                <FeatureChip label="SOP apps instead of spreadsheets" />
                <FeatureChip label="AI insights backed by franchise experts" />
              </div>
            </div>

            {/* Right: hero banner image (dashboard screenshot) */}
            <div className="relative w-full overflow-hidden rounded-lg border border-line-subtle bg-bg-surface shadow-sm">
              <div className="absolute left-4 top-1 z-10 flex items-center gap-2 rounded-lg border-2 border-brand-primary bg-brand-primarySubtle px-3 py-2 shadow-md backdrop-blur">
                <svg width="20" height="14" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                  <path d="M2 2h6v16h16v6H2V2z" className="fill-brand-primary" />
                  <path d="M12 2h16v6h6v16h-6V8H12V2z" className="fill-brand-primaryHover" />
                </svg>
                <span className="text-xs font-medium text-brand-primary">Your morning ops readout</span>
              </div>
              <Image
                src="/hero-dashboard.png"
                alt="Franchir dashboard: Sales Performance, Morning Prep SOP, Production Plan"
                width={1200}
                height={640}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

        </Container>
      </Section>
      </div>

      {/* How it works: three stacked cards, Franchir-adapted */}
      <Section id="how">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              How it works
            </h2>
            <p className="mt-3 text-xl leading-relaxed text-text-secondary">
              We are not consultants or software providers. We work as part of your team, combining restaurant experts and AI engineers to support the design and implementation of custom SOPs, dashboards, and tools to build an AI-empowered franchise operation.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {/* Card 1: Restaurant experts */}
            <Card className="overflow-hidden border-line-subtle bg-bg-surface">
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_1fr] md:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-black">
                    Restaurant experts
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    Access to seasoned restaurant operators who led multi-location teams across the United States.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-lg border border-line-subtle bg-bg-primary">
                  <Image
                    src="/franchise-experts-org.png"
                    alt="Your company: Director of Ops, Franchir, and restaurant experts"
                    width={800}
                    height={500}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Card 2: AI engineers */}
            <Card className="overflow-hidden border-line-subtle bg-bg-surface">
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_1fr] md:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-black">
                    AI engineers
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    Engineers and technologists who build AI agents and tools that deliver insights at the exact moment of decision—no waiting days for analyses.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-lg border border-line-subtle bg-bg-primary">
                  <Image
                    src="/ai-engineer-architecture.png"
                    alt="Franchir AI-Powered Franchise Orchestration Layer: BI, Integration, Permissions, POS, Labor, Ops, Invt, HRIS, Fin, Data Lake"
                    width={800}
                    height={500}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Card 3: Custom software */}
            <Card className="overflow-hidden border-line-subtle bg-bg-surface">
              <div className="grid gap-6 p-6 md:grid-cols-[1fr_1fr] md:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-black">
                    Custom software
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    Tools built specifically for your business. Walk away with software that works for you, not against you.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-lg border border-line-subtle bg-bg-primary">
                  <Image
                    src="/custom-software-dashboard.png"
                    alt="Franchir custom software: morning ops readout with Sales Performance, Morning Prep SOP, Production Plan"
                    width={800}
                    height={500}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Product: centered, three feature cards */}
      <Section variant="alt" id="product">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              One platform for performance, SOPs, and production planning.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-text-secondary">
              Franchir replaces scattered dashboards and one-off spreadsheets
              with a calm, structured cockpit that updates in real time.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:max-w-4xl md:mx-auto">
            {[
              {
                title: "Unified performance view",
                body: "See sales, labor, and key product lines across every location in one place.",
              },
              {
                title: "Standardized SOP apps",
                body: "Turn best-practice checklists into guided flows that every store follows.",
              },
              {
                title: "AI-native analysis",
                body: "Ask questions in plain language and get structured answers you can trust.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-line-subtle">
                <CardHeader>
                  <CardTitle className="text-base text-text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-text-secondary">
                  {item.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA: Ready to superpower */}
      <Section>
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Ready to superpower your operations?
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-text-secondary">
              Walk away with software that works for you, not against you.
            </p>
            <div className="mt-6">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryHover"
                asChild
              >
                <Link href="/demo">Get a demo</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer: dark, four columns per Figma */}
      <footer className="bg-brand-secondaryHover border-t border-line-subtle">
        <Container className="py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="mt-10 border-t border-line-subtle pt-8" />
        </Container>
      </footer>
    </main>
  );
}
