"use client";

import * as React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

type FormState = {
  firstName: string;
  lastName: string;
  business: string;
  email: string;
};

export default function DemoPage() {
  const [form, setForm] = React.useState<FormState>({
    firstName: "",
    lastName: "",
    business: "",
    email: "",
  });
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const router = useRouter();

  const errors = {
    firstName: form.firstName.trim() ? "" : "First name is required.",
    lastName: form.lastName.trim() ? "" : "Last name is required.",
    business: form.business.trim() ? "" : "Business is required.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Please enter a valid email.",
  };

  const canSubmit = !errors.firstName && !errors.lastName && !errors.business && !errors.email;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
setTouched({ firstName: true, lastName: true, business: true, email: true });
    setSubmitError(null);
    if (!canSubmit) return;

    setSubmitting(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.from("demo_requests").insert({
        name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
        email: form.email.trim().toLowerCase(),
        company: form.business.trim(),
        status: "pending",
      });

      if (error) {
        throw error;
      }

      router.push("/demo/success");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <Section>
        <Container>
          <div className="max-w-[720px]">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-brand-primary sm:text-5xl">
              Get a demo
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Share your contact information and we’ll reach out to schedule a walkthrough.
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
                  <li>Open conversation on your needs</li>
                  <li>Discussion on outcomes you want to drive</li>
                  <li>Scope, integration approach and timelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-line-subtle">
              <form onSubmit={onSubmit}>
                <CardHeader>
                  <CardTitle className="text-xl text-text-primary">
                    Contact details
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
                        aria-invalid={!!(touched.firstName && errors.firstName)}
                        placeholder="Jane"
                      />
                      {touched.firstName && errors.firstName ? (
                        <p className="text-sm text-semantic-error">{errors.firstName}</p>
                      ) : null}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
                        aria-invalid={!!(touched.lastName && errors.lastName)}
                        placeholder="Smith"
                      />
                      {touched.lastName && errors.lastName ? (
                        <p className="text-sm text-semantic-error">{errors.lastName}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business">Business</Label>
                    <Input
                      id="business"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, business: true }))}
                      aria-invalid={!!(touched.business && errors.business)}
                      placeholder="Your company or brand"
                    />
                    {touched.business && errors.business ? (
                      <p className="text-sm text-semantic-error">{errors.business}</p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      aria-invalid={!!(touched.email && errors.email)}
                      placeholder="you@company.com"
                    />
                    {touched.email && errors.email ? (
                      <p className="text-sm text-semantic-error">{errors.email}</p>
                    ) : (
                      <p className="text-sm text-text-muted">We’ll never spam.</p>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  {submitError && (
                    <p className="w-full text-sm text-semantic-error">{submitError}</p>
                  )}
                  <div className="flex w-full items-center justify-between gap-3">
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
                  </div>
                </CardFooter>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
