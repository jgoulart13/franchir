"use client";

import * as React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState = {
  name: string;
  email: string;
  company: string;
};

export default function DemoPage() {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    company: "",
  });
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = React.useState(false);

  const errors = {
    name: form.name.trim() ? "" : "Name is required.",
    company: form.company.trim() ? "" : "Company is required.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Please enter a valid email.",
  };

  const canSubmit = !errors.name && !errors.email && !errors.company;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true });
    if (!canSubmit) return;

    setSubmitting(true);
    try {
      // Replace with your real submit
      await new Promise((r) => setTimeout(r, 600));
      alert("Submitted (wire up to your backend).");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <Section>
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Request a demo
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Tell us a bit about your workflow. We’ll respond with a tight plan,
              not a pitch deck.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="border-line-subtle">
              <CardHeader>
                <CardTitle className="text-xl text-text-primary">
                  What you’ll get
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  A calm walkthrough focused on outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-text-secondary">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Clear scope & success criteria</li>
                  <li>How we handle trust, guardrails, and failure states</li>
                  <li>Integration approach and timelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-line-subtle">
              <form onSubmit={onSubmit}>
                <CardHeader>
                  <CardTitle className="text-xl text-text-primary">
                    Contact details
                  </CardTitle>
                  <CardDescription className="text-text-secondary">
                    We validate on blur. No fluff.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                      aria-invalid={!!(touched.name && errors.name)}
                    />
                    {touched.name && errors.name ? (
                      <p className="text-sm text-semantic-error">{errors.name}</p>
                    ) : (
                      <p className="text-sm text-text-muted">Your full name.</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      aria-invalid={!!(touched.email && errors.email)}
                    />
                    {touched.email && errors.email ? (
                      <p className="text-sm text-semantic-error">{errors.email}</p>
                    ) : (
                      <p className="text-sm text-text-muted">We’ll never spam.</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, company: true }))}
                      aria-invalid={!!(touched.company && errors.company)}
                    />
                    {touched.company && errors.company ? (
                      <p className="text-sm text-semantic-error">{errors.company}</p>
                    ) : (
                      <p className="text-sm text-text-muted">Your org name.</p>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between gap-3">
                  <p className="text-sm text-text-muted">
                    Response within 1–2 business days.
                  </p>
                  <Button
                    type="submit"
                    disabled={!canSubmit || submitting}
                    className="bg-brand-primary hover:bg-brand-primaryHover"
                  >
                    {submitting ? "Sending…" : "Send request"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}