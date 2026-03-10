# Design System
Website spec (cool, premium, operator). v1.0

This document is the single source of truth for visual + interaction consistency.
When generating UI, follow this spec strictly.

---

## 0) Tech & Conventions

### Stack assumptions
- Tailwind CSS
- shadcn/ui components
- Next.js / React

### Canonical imports (always reuse these)
- Button: `@/components/ui/button`
- Input: `@/components/ui/input`
- Textarea: `@/components/ui/textarea`
- Label: `@/components/ui/label`
- Card: `@/components/ui/card`
- Badge: `@/components/ui/badge`
- Table: `@/components/ui/table`
- Alert: `@/components/ui/alert`
- Dialog (Modal): `@/components/ui/dialog`
- Drawer (Sheet): `@/components/ui/sheet`
- Toasts: `@/components/ui/toast` + `@/components/ui/toaster` + `@/components/ui/use-toast`

If a component exists in shadcn, use it instead of creating a bespoke version.

---

## 1) Foundations

### 1.1 Colors

#### Brand
- Primary (accent):
  - `primary`: `#2F4BB8`
  - `primary-hover`: `#253E96`
  - `primary-subtle`: `#EEF2FF` (used for subtle highlight backgrounds)
- Secondary (brand-neutral, used for secondary CTAs and emphasis):
  - `secondary`: `#334155`
  - `secondary-hover`: `#1E293B`

#### Neutrals (cool slate)
- Backgrounds:
  - `bg-primary`: `#F4F6F8` (default page background)
  - `bg-section-alt`: `#EEF2F6` (alternating section background)
  - `bg-surface`: `#FFFFFF` (cards, panels)
- Text:
  - `text-primary`: `#0F172A`
  - `text-secondary`: `#475569`
  - `text-muted`: `#64748B`
- Lines:
  - `border-subtle`: `#E2E8F0`
  - `divider`: `#CBD5E1`

#### Semantic states (desaturated)
- Success:
  - `success`: `#2E6F5E`
  - `success-subtle`: `#EAF4F1`
- Warning:
  - `warning`: `#8B6B2E`
  - `warning-subtle`: `#F7F1E6`
- Error:
  - `error`: `#8C3A3A`
  - `error-subtle`: `#F7EAEA`
- Info:
  - `info`: `#3E5C7D`
  - `info-subtle`: `#EAF1F8`

#### Color usage rules
- Use **one accent** (Primary) for:
  - Primary CTA buttons
  - Links
  - Small emphasis (rare)
- Do **not** use primary color for large section backgrounds.
- Avoid gradients, neon colors, and multi-accent palettes.
- Prefer whitespace over borders; prefer borders over shadows.

---

### 1.2 Typography

#### Font families
- Sans: `Inter` (primary)
- Mono (optional, code snippets): `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

#### Type scale (website)
- H1 (hero):
  - Desktop: `56–64px`, weight `700`, line height `1.1–1.2`
  - Mobile: `36–44px`, weight `700`, line height `1.15–1.25`
- H2 (section):
  - `32–40px`, weight `650–700`, line height `1.2–1.3`
- H3 (subsection / card title):
  - `20–24px`, weight `600–650`, line height `1.3`
- Body:
  - `16–18px`, weight `400–500`, line height `1.6`
- Small / meta:
  - `13–14px`, weight `400–500`, line height `1.5`

#### Typography rules
- Sentence case (avoid Title Case).
- Keep paragraphs short; prefer bullets for more than 3 points.
- Maintain strong vertical rhythm: headlines must “breathe.”

---

### 1.3 Spacing scale & radii

#### Spacing scale (px)
Use these increments only:
- `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96`

Common patterns:
- Inside cards: `24–32`
- Between blocks: `32`
- Between sections: `80–96` desktop, `48–64` mobile

#### Border radius (px)
- `radius-sm`: `8`
- `radius-md`: `10`
- `radius-lg`: `16` (cards, feature blocks)
- `radius-full`: `9999` (chips/badges only)

Rule: do not use extreme pill shapes for primary buttons.

---

### 1.4 Shadows, elevation, motion

#### Shadows (rare)
Prefer borders. When needed:
- `shadow-sm`: subtle ambient (used on hover only)
- `shadow-md`: only for modals/drawers

Rule: no “floating card wall” effect on marketing pages.

#### Motion rules
- Duration: `150–200ms`
- Easing: standard ease-in-out
- Allowed transitions:
  - opacity fade
  - translateY `2–4px`
- Disallowed:
  - bounce
  - elastic
  - scale “pop” on hover as primary affordance
  - parallax

---

## 2) Layout Rules

### 2.1 Max content width
- Container max width: `1120px`
- Text column max width: `720px` (for readable copy)
- Hero max width: `800px` for H1 line length control

### 2.2 Breakpoints (Tailwind defaults)
- `sm`: 640
- `md`: 768
- `lg`: 1024
- `xl`: 1280

### 2.3 Grid usage
- Use a 12-column grid when needed.
- Common marketing layouts:
  - 2-column: `md:grid-cols-2` with 32px gap
  - 3-up feature: `lg:grid-cols-3` with 24–32px gap
- Avoid dense dashboard tile grids on the website.

### 2.4 Padding rules
- Page horizontal padding:
  - desktop: 24px
  - mobile: 20px
- Section vertical padding:
  - desktop: 96px
  - mobile: 64px
- Card padding:
  - default: 24px
  - dense: 16px (rare)

---

## 3) Interaction Patterns

### 3.1 Buttons (all states)

#### Canonical component
Use `Button` from `@/components/ui/button`

#### Variants
- `variant="default"`: Primary CTA
- `variant="secondary"`: Secondary CTA
- `variant="outline"`: Tertiary CTA
- `variant="ghost"`: Low-emphasis actions (rare on marketing)
- `variant="destructive"`: Only inside confirmations

#### Sizes
- `size="default"`: standard CTA
- `size="sm"`: compact areas
- `size="lg"`: hero primary CTA (preferred)

#### States
- Default:
  - Primary: `primary` background, white text
- Hover:
  - Primary: `primary-hover`
- Focus:
  - Visible focus ring (do not remove)
- Disabled:
  - Reduce opacity, no hover affordance
- Loading:
  - Keep width stable; show spinner left of label; disable click

Rules:
- One primary CTA per viewport.
- Labels are verbs: “Schedule a call”, “View case studies”, “Get started”.

---

### 3.2 Form fields & validation

#### Canonical components
- Input: `@/components/ui/input`
- Label: `@/components/ui/label`
- (Optional) Form: `@/components/ui/form` if you use shadcn forms

#### Field styling
- Height: 40–44px
- Background: `bg-surface`
- Border: `border-subtle`
- Focus ring: visible, subtle; do not use neon

#### Validation behavior
- Validate on blur (and on submit).
- Error message appears below field in `error` color.
- Keep error copy specific and actionable:
  - “Please enter a valid email.”
  - “Company name is required.”

#### Helper text
- Optional, uses `text-muted`.
- Not a substitute for labels (labels required).

---

### 3.3 Modals, drawers, toasts

#### Modals (Dialog)
Use `Dialog` from `@/components/ui/dialog`

Behavior:
- Used for confirmations or short forms (≤ 6 fields)
- Trap focus; ESC closes; click outside closes (unless destructive)
- Default size: medium, content max width ~480–560px
- Destructive actions require explicit confirmation

#### Drawers (Sheet)
Use `Sheet` from `@/components/ui/sheet`

Behavior:
- Use for contextual details without losing page context
- Right-side drawer default
- Keep it lightweight; avoid deep navigation within a drawer

#### Toasts
Use `useToast` + `Toaster`

Behavior:
- Success: “Saved.” / “Sent.”
- Error: brief + action if possible (Retry)
- Toasts are non-blocking; do not stack too many

---

## 4) Canonical Components (Reuse List)

### 4.1 Button
Import:
- `import { Button } from "@/components/ui/button"`

Props:
- `variant?: "default" | "secondary" | "outline" | "ghost" | "destructive"`
- `size?: "default" | "sm" | "lg" | "icon"`
- Standard button props + `asChild?`

---

### 4.2 Input
Import:
- `import { Input } from "@/components/ui/input"`

Props:
- Standard input props (type, value, onChange, placeholder, disabled)

Rules:
- Always pair with `Label`.
- Errors render below.

---

### 4.3 Card
Import:
- `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"`

Rules:
- Default radius: 16px
- Border subtle; no heavy shadow
- Use for:
  - feature blocks
  - testimonials
  - pricing/plan blocks (if any)
  - case studies highlights

---

### 4.4 Modal (Dialog)
Import:
- `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog"`

Rules:
- Keep copy short
- Confirm destructive actions

---

### 4.5 Drawer (Sheet)
Import:
- `import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetTrigger } from "@/components/ui/sheet"`

Rules:
- Use for supplementary details
- Avoid multi-step flows

---

### 4.6 Table
Import:
- `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"`

Rules:
- Clean header, subtle dividers
- Row hover uses subtle background shift only
- Actions go to the right; keep count minimal

---

### 4.7 Alert
Import:
- `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"`

Rules:
- Use semantic states for color
- Keep messages actionable

---

### 4.8 Badge
Import:
- `import { Badge } from "@/components/ui/badge"`

Rules:
- Use for categories/status, not decoration
- Avoid too many badge colors

---

## 5) Website Page Patterns

### 5.1 Homepage section order (recommended)
1. Hero (H1 + subhead + primary CTA + secondary CTA)
2. Social proof (logo band)
3. Problem framing (3-up blocks)
4. Solution (what it is / how it works)
5. Proof (testimonials/case studies)
6. CTA section (final)

### 5.2 Copy tone rules
- One strong framing concept allowed (“superpowered”)
- Everything else is disciplined:
  - no exclamation marks
  - no stacked hype adjectives
  - concrete nouns + verbs

---