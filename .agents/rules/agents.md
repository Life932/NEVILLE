---
trigger: always_on
---

# 🤖 Instructions for AI Agents (NEVILLE Project)

This repository contains the frontend architecture for **NEVILLE**, a youth-led educational and community-action initiative based in Dhaka, Bangladesh.

**Notice to AI Agents:** This `AGENTS.md` file is your single source of truth for all context, design systems, architectural patterns, and workflows. You must read and internalize this document before executing any prompt, writing any code, or modifying files.

---

## 🚨 Core Codebase Guidelines 🚨

**CRITICAL**: This is a highly specific, visually-driven Next.js codebase. Follow these rules strictly to prevent layout shifts, memory leaks, or regressions.

### Regression Prevention & Edits

- **NEVER** introduce breaking changes to the global layout or `globals.css` without explicit approval.
- **NEVER** modify existing Framer Motion physics or animations unless specifically requested.
- **ALWAYS** verify that your changes do not break responsive breakpoints (Mobile, iPad, Desktop).
- **Targeted Edits:** Prefer small, precise edits over massive rewrites. If you are updating a specific function or UI block, you may use targeted code replacements. However, you must ensure the resulting file is structurally sound and syntax-error-free. Do not leave broken reference links.

### Code Change Philosophy

- **Prefer addition over modification**: Add new sub-components alongside existing code rather than creating massive monolithic files.
- **Preserve existing behavior**: If unsure about a styling choice, err on the side of maintaining the established modern, glassy and soft aesthetic.
- **Start small**: Make minimal changes to achieve the goal. Do not over-engineer.
- **Document reasoning**: Regularly, annotate complex logic, especially Framer Motion hooks and decoupled data structures, with `/* DEV NOTE: ... */`.

---

## 💻 Build and Development Commands

### Core Build System

- **Package Manager:** `pnpm` (Strictly use `pnpm`, do not use `npm` or `yarn`).
- **Start Dev Server:** `pnpm dev`
- **Build for Production:** `pnpm build`
- **Start Production Server:** `pnpm start`
- **Check Code Linting:** `pnpm lint`

### Shadcn UI CLI

- **Add a component:** `pnpm dlx shadcn@latest add [component-name]`
- _Rule:_ Always use the CLI to add Shadcn components rather than building them from scratch.

---

## 🏗️ Architecture Overview

### 1. Framework Structure

- **Next.js App Router (`app/`):** We strictly use the App Router paradigm.
- **Server vs. Client Components:** Default to React Server Components (RSC). Only add `"use client"` at the top of files that explicitly require state (`useState`), effects (`useEffect`), or Framer Motion (`motion.div`).

### 2. Component Siloing

- **UI Components (`components/ui/`):** Reserved strictly for generated Shadcn components.
- **Complex UI (`components/aceternity/`):** Reserved for complex, interactive Aceternity UI components.
- .\src\app\ui\*directory name like home, about, etc.\* should be the place where the components made for a particular page rests
- **Page Layouts:** Break large pages down into section components (e.g., `HeroSection.tsx`, `SyllabusGrid.tsx`) rather than writing 500-line `page.jsx` files.

### 3. Data Decoupling (Phase 2 Prep)

All dynamic data (Olympiad info, Team members, Ledger stats) **MUST** be decoupled from the React render tree.

- Store data in standard JS arrays/objects in a dedicated `data/` directory.
- **Why?** The architecture must be prepared for Sanity.io Headless CMS webhooks in Phase 2. Components should accept props dynamically as if they were being fed by a Sanity GROQ query.

---

## 🎨 Design System & Styling

# AGENT EXECUTION RULES

## 1. MOBILE-FIRST RESPONSIVE MANDATE

- Default classes MUST be mobile-first (`flex-col`, `grid-cols-1`, `w-full`). Add desktop overrides explicitly (`md:flex-row`, `lg:grid-cols-3`).
- BANNED: Fixed pixel widths on containers (`w-[1200px]`).
- REQUIRED: Container wrapper `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Prevent horizontal scroll. Use `overflow-x-hidden` on main layouts and wrap text properly.
- Minimum touch target for all buttons/links: `44x44px` padding area.

## 2. MANDATORY PRE-COMPLETION TESTING

Do NOT declare a task "Done" or "Ready" without executing these checks:

1. Viewport Check: Verify layout at 375px (Mobile) and 1440px (Desktop) via devtools MCP.
2. Build Check: Verify zero build errors or missing module errors in terminal.
3. Interactive Check: Verify modals, drawers, and tabs don't overflow mobile screen bounds.

## 3. LIGHTWEIGHT EXECUTION

- Run terminal commands sequentially. No parallel background tasks.
- Install component dependencies before writing JSX imports.

**Aesthetic:** "Modern, Sleek, and Soft UI"

- **General Vibe:** Accessible, gentle on the eyes, professional, and highly practical. Use soft shadows (`shadow-sm`, `shadow-md`) to create depth.
- **Typography:** Primary font is **Verdana** (Web-safe, highly legible, zero-download). Fallback to standard `sans-serif`. Use clean, readable hierarchies without extreme or jarring size variations.
- **Borders/Radii:** Soft and pleasant corners (`rounded-lg`, `rounded-xl`, `rounded-2xl`). Avoid harsh sharp edges (`rounded-none`) or excessively massive brutalist radii.

**Tailwind v4 Variables (Strict):**
You must strictly use standard Tailwind/Shadcn CSS variables mapped to the NEVILLE palette. Do not introduce legacy utility classes or third-party CSS libraries.

- **Backgrounds:** Pure White (`bg-background`)
- **Text/Foreground:** Charcoal `#36454F` (`text-foreground`)
- **Primary Brand:** Royal Blue `#4866FA` (`bg-primary`, `text-primary-foreground`)
- **Secondary Brand:** Light Blue `#99BCF2` (`bg-secondary`, `text-secondary-foreground`)
- **Muted / Cards:** Icy Blue `#E5EDFF` (`bg-muted`, `border-border`)

---

## ⚙️ MCP (Model Context Protocol) Usage

Agents must utilize available MCP servers to prevent hallucinations and verify code execution:

1. **Context7 (`context7`):** USE THIS to read the official documentation for Next.js, Shadcn UI, and Aceternity UI _before_ generating complex components.
2. **Next.js DevTools (`nextjs-devtools`):** USE THIS to read build logs, analyze routing structures, and debug caching/server errors.
3. **Chrome DevTools (`chrome-devtools`):** USE THIS to inspect the live DOM on `localhost:3000` to verify that Tailwind classes applied correctly and responsive layouts did not break.

---

## 🧪 Testing & Verification Protocol

Before declaring any task complete, the AI Agent must verify the code:

1. **Syntax Check:** Ensure there are no unresolved imports or missing TypeScript interfaces (if `.tsx` is used).
2. **Live Verification:** If instructed, use the `chrome-devtools` MCP to ping the local server and verify the component renders without crashing.
3. **Console Logs:** Use the `nextjs-devtools` MCP to check the terminal for hydration errors or `"use client"` boundary warnings.
4. **Zero Test Failures:** If standard test suites are run via `pnpm test`, they must pass completely before moving to the next task.

---

## ⚠️ Hardware Constraints & Execution Rules (CRITICAL)

**The host machine runs on an Intel i3 (7th Gen) processor with 8GB of RAM.**
To prevent system freezing or OOM (Out of Memory) crashes, the Agent MUST adhere to these execution rules:

1. **Sequential Execution:** Execute terminal commands one at a time. Do not run parallel `pnpm` installation scripts.
2. **No Heavy Background Tasks:** Do not autonomously initiate massive test suites, global linting sweeps, or heavy build processes unless explicitly commanded by the user.
3. **Optimized Senses:** Rely on cloud-based Context7 for documentation fetching rather than spinning up heavy local headless browser instances whenever possible.

---

**End of Instructions.**
Agent, confirm your understanding of these guidelines before proceeding with any user prompt.
