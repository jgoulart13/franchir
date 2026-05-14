import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line-subtle bg-bg-primary/90 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
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
          <span className="text-sm font-semibold tracking-tight text-text-primary">
            Franchir
          </span>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <nav className="hidden items-center gap-4 text-text-secondary sm:flex">
            <Link href="/#how" className="hover:text-text-primary">
              How it works
            </Link>
            <Link href="/#product" className="hover:text-text-primary">
              Product
            </Link>
          </nav>
          <Button variant="default" size="sm" asChild>
            <Link href="/demo">Get a demo</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
