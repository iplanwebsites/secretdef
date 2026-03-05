# @secretdef/buildkite

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Buildkite** environment variables.

## Install

```bash
npm install @secretdef/buildkite secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/buildkite';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BUILDKITE_API_TOKEN` | Buildkite API access token | Yes |
| `BUILDKITE_ORGANIZATION_SLUG` | Buildkite organization slug | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
