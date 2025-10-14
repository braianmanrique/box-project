# Copilot Instructions for BoxProject

## Project Overview
- **Framework:** Angular 17 (see `angular.json`, `package.json`)
- **Entry Point:** `src/main.ts` bootstraps the app; root component is `src/app/app.component.ts`
- **App Structure:**
  - All main code is under `src/app/`
  - Assets are in `src/assets/`
  - Global styles: `src/styles.scss`
  - Routing: `src/app/app.routes.ts`
  - App config: `src/app/app.config.ts`

## Developer Workflows
- **Start Dev Server:** `npm start` or `ng serve` (see tasks.json)
- **Run Tests:** `npm test` or `ng test` (Karma)
- **Build:** `ng build` (outputs to `dist/`)
- **Scaffold Components:** `ng generate component <name>`
- **Scaffold Services/Other:** `ng generate service <name>`, etc.

## Patterns & Conventions
- **Component Files:** Each Angular component has `.ts`, `.html`, `.scss`, and `.spec.ts` files (see `app.component.*`)
- **Routing:** Centralized in `app.routes.ts`
- **Configuration:** Use `app.config.ts` for app-wide config
- **TypeScript:** Strict typing enforced via `tsconfig.json`
- **Testing:** Unit tests colocated as `.spec.ts` files
- **Styles:** Prefer SCSS, global styles in `styles.scss`, component styles in their own `.scss`

## Integration Points
- **Angular CLI:** All major workflows use Angular CLI commands
- **External Dependencies:** Managed via `package.json`; update with `npm install`
- **Assets:** Static files go in `src/assets/`

## Examples
- To add a new feature, generate a component and update routing in `app.routes.ts`
- To add global config, update `app.config.ts`
- To debug, use browser dev tools and Angular CLI's live reload

## Key Files
- `src/app/app.component.ts` — main component logic
- `src/app/app.routes.ts` — routing definitions
- `src/app/app.config.ts` — configuration
- `src/styles.scss` — global styles
- `angular.json` — Angular workspace config
- `package.json` — dependencies and scripts

---
**For AI agents:**
- Always use Angular CLI for scaffolding and builds
- Follow the file structure and naming conventions as shown
- Reference this file for project-specific patterns before making changes
