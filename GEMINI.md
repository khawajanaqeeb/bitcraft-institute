# BitCraft Institute - Development Guidelines

This document serves as the primary source of truth for development standards, architectural patterns, and workflows within the BitCraft Institute project.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **React Version:** 19 (React Compiler enabled)
- **Styling:** Tailwind CSS 4 (using `@import "tailwindcss"` and `@theme`)
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Fonts:** Geist Sans & Geist Mono

## 🏗️ Architecture & Project Structure

- **App Router:** All pages and layouts reside in `src/app`.
- **Components:** Shared UI components reside in `src/components`.
- **Path Aliases:** Use `@/` to reference the `src` directory (e.g., `import Navigation from "@/components/Navigation"`).
- **Theming:** The project supports light/dark mode using CSS variables defined in `src/app/globals.css`. Theming is managed by `ThemeProvider` and toggled via `ThemeToggle`.

## 🛠️ Coding Conventions

### TypeScript & React
- **Functional Components:** Always use functional components. Prefer `export default function ComponentName()`.
- **Type Safety:** Maintain strict TypeScript compliance. Avoid `any`. Define interfaces or types for props.
- **Client Components:** Use the `"use client"` directive only when necessary (e.g., hooks, event listeners, Framer Motion).
- **React Compiler:** The project has the React Compiler enabled. Avoid manual `useMemo` or `useCallback` unless specifically required for performance optimizations beyond the compiler's scope.

### Styling (Tailwind CSS 4)
- **CSS Variables:** Use the predefined CSS variables in `globals.css` for consistent colors, spacing, and radii.
- **Tailwind 4 Syntax:** Follow Tailwind CSS 4 conventions. Note that Tailwind 4 uses CSS-first configuration via the `@theme` block.
- **Glassmorphism:** Use the `.nav-glass` or similar utility classes for consistent glassmorphic effects.

### Assets & Icons
- **Images:** Store static images in the `public/` directory. Use the Next.js `Image` component or standard `img` tags with proper fallback/error handling as seen in `Navigation.tsx`.
- **Icons:** Use `react-icons` for consistency across the application.

## 🔄 Workflows

### Development
```bash
npm run dev
```

### Build & Validation
```bash
# Verify the build process
npm run build

# Run linting
npm run lint
```

### Git Standards
- **Commits:** Write clear, concise commit messages.
- **Branches:** Use descriptive branch names (e.g., `feat/`, `fix/`, `chore/`).

## 🧠 Core Features & Components

- **Navigation:** Centralized links in `src/components/Navigation.tsx`.
- **Theme Support:** Fully responsive light/dark mode with system preference detection and manual toggle.
- **Performance:** Leveraging Next.js optimizations (Image optimization, font optimization, React Compiler).
