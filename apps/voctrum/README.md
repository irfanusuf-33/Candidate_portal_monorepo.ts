# Voctrum ERP Web App

Compact guide to the repository layout, styling stack, and how we use (or plan to use) Zustand for client state.

## Folder Structure

- `app/` – Next.js App Router pages.
  - `layout.tsx` – Global shell (header/footer, fonts, background) applied to every route.
  - `page.tsx` – Landing walkthrough for the product.
  - `about/`, `products/`, `services/`, `industries/`, `carrers/`, `contact/` – Feature pages with boilerplate UI for the basic flow.
- `components/`
  - `shared/` – App-level building blocks such as `site-header`, `site-footer`, and `page-hero`.
  - `ui/` – Shadcn UI primitives (Button, Card, Sheet, etc.) generated from Radix UI + Tailwind recipes.
- `hooks/` – Reusable React hooks (empty by default; add shared logic here).
- `lib/` – Utilities (`utils.ts` for `cn`) and a good spot for API clients or helper modules.
- `public/` – Static assets served at the root URL.
- `styles` live in `app/globals.css`, which Tailwind imports at build time.
- Config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `components.json` (shadcn UI settings), and Tailwind setup files.

## Styling Stack

- **Tailwind CSS v4** – Utility-first styling via `@import "tailwindcss";` inside `app/globals.css`. Uses the new CSS-first syntax and theme tokens declared with `@theme inline`.
- **Shadcn UI** – Component library generated locally under `components/ui`. Variants and tokens align with Tailwind classes; customize via `components.json` and the exported `cn` helper.
- **Radix UI primitives** – Underpinning for interactive components (dialogs, menus, sheets). Styling is provided by Shadcn; accessibility comes from Radix.
- **tw-animate-css** – Optional animation utilities imported globally.
- **Color system** – OKLCH variables defined in `globals.css` for light/dark themes; radius scales for consistent rounding.
- **Fonts** – Geist Sans and Geist Mono loaded through `next/font` in `app/layout.tsx`.

## Zustand (State Management)

Zustand is not installed yet, but this project is set up to add it easily for client-side state that doesn't fit React Server Components.

### How to add

```bash
npm install zustand
```

Create a store (recommended location: `lib/stores/` or `hooks/`):

```ts
// lib/stores/ui-store.ts
import { create } from "zustand";

type UIState = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
```

Use it in a client component:

```tsx
"use client";
import { useUIStore } from "@/lib/stores/ui-store";

export function SidebarToggle() {
  const { sidebarOpen, toggleSidebar } = useUIStore();
  return (
    <button onClick={toggleSidebar}>
      {sidebarOpen ? "Close" : "Open"}
    </button>
  );
}
```

### Guidelines

- Keep stores small and domain-focused (e.g., `ui-store`, `session-store`).
- Co-locate selectors with the store to avoid rerenders (`const isOpen = useUIStore((s) => s.sidebarOpen)`).
- Persist critical client state with `zustand/middleware` if needed (`persist`, `devtools`).
- Prefer Server Components for data fetching; use Zustand for client-only UI state or optimistic updates.

## Development

- Install deps: `npm install`
- Run locally: `npm run dev`
- Lint: `npm run lint`

This README stays focused on structure and styling; add more operational runbooks here as the app grows.
