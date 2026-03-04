# secretdef

Open standard and TypeScript library for declaring environment secret requirements. Like `@types` for secrets.

**Website:** https://secretdef.com
**Repo:** https://github.com/iplanwebsites/secretdef

## Monorepo structure

```
packages/secretdef/          # Core library (npm: secretdef)
packages/@secretdef/*/       # Community secret definitions (aspirational, not fully verified)
packages/create-secretdef/   # CLI tool (Phase 2, not yet implemented)
apps/web/                    # Docs + brochure site (Vike + React + Tailwind)
docs/                        # PRD and planning docs
```

## Commands

```bash
pnpm install                        # Install all dependencies
pnpm build                          # Build all packages (turbo)
pnpm test                           # Run all tests (turbo)
pnpm typecheck                      # Typecheck all packages (turbo)

# Core library only
pnpm --filter secretdef build       # Build core (tsup → dist/)
pnpm --filter secretdef test        # Run core tests (vitest)
pnpm --filter secretdef test:watch  # Watch mode

# Web app
pnpm --filter secretdef-web dev     # Dev server on port 5188
pnpm --filter secretdef-web build   # Production build
```

## Core library API

Core exports:

```ts
import {
  defineSecrets,
  validateSecrets,
  useSecret,
} from "secretdef";
import type { SecretSpec } from "secretdef";
```

- `defineSecrets(specs)` — Returns normalized `Record<string, SecretSpec>` and always auto-registers to the global registry.
- `validateSecrets(specs?, env?, options?)` — Validates an explicit map, or the auto-registry if no map passed. Returns resolved `Record<string, string>`.
- `useSecret(key, specs?)` — Reads a single secret. Accepts explicit map or falls back to auto-registry.
- `enableAutoRegister()` — **Deprecated no-op.** Auto-registration is always on. Kept for backward compatibility.

### Two consumer styles

**Auto-register (easy, default):** Import your `secrets.ts` files, then call `validateSecrets()` with no args. `defineSecrets` always registers globally.
**Explicit spreading (structured):** Spread specs into `validateSecrets({ ...app, ...db })`. Full control over which specs are validated.

The primary use case is **app developers** defining their own secrets in `secrets.ts` files. SDK/module authors can also ship secret definitions alongside their packages.

## Core library source files

- `src/types.ts` — `SecretSpec`, `RegisteredSecret`, `ValidateOptions`
- `src/registry.ts` — Global `Map`, `register()`, `clearRegistry()` (auto-registration always on; `enableAutoRegister()` is a deprecated no-op)
- `src/caller.ts` — Stack trace parsing to extract caller file path
- `src/resolve.ts` — Resolves a spec against env + environments
- `src/validate.ts` — `validateSecrets()` with error/warn output
- `src/accessor.ts` — `useSecret()` + `SecretNotAvailableError`
- `src/index.ts` — Public API barrel

## @secretdef/\* packages

Each package is a single `index.ts` exporting `const secrets = defineSecrets({...})` with a `package.json` that peer-depends on `secretdef`. Uses `workspace:*` protocol locally.

To add a new package: create `packages/@secretdef/<name>/index.ts` and `package.json`.

## Tech stack

- **Package manager:** pnpm (workspace protocol)
- **Build orchestration:** Turborepo
- **Core library build:** tsup (ESM + CJS + DTS)
- **Tests:** Vitest
- **Versioning:** Changesets
- **Web framework:** Vike (SSR) + React + Tailwind + shadcn/ui components
- **Web hosting:** Cloudflare Workers (wrangler)
- **CI:** GitHub Actions (ci.yml, publish.yml, deploy-web.yml)

## Key design decisions

- `defineSecrets` returns pure data — no Proxy, no magic. Always auto-registers to global registry.
- Production mode: missing required secrets → error table → `process.exit(1)`.
- Non-production: missing secrets → warning table → server starts. Throws only on access via `useSecret`.
- Error messages are structured for both humans and AI agents: include env var name, description, dashboard URL, registering file, current environment.
- Zero dependencies. Target <2KB minified.
- `@secretdef/*` packages use peer deps to ensure single global registry.

## Conventions

- Core library changes require tests. Run `pnpm --filter secretdef test` before committing.
- All `@secretdef/*` packages follow the same structure: single `index.ts` with `export const secrets = defineSecrets({...})`.
- Every secret spec should include a `description` with a URL to the service's dashboard/settings page.
