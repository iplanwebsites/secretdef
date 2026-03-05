# @secretdef/klarna

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Klarna** environment variables.

## Install

```bash
npm install @secretdef/klarna secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/klarna';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KLARNA_USERNAME` | Klarna API username | Yes |
| `KLARNA_PASSWORD` | Klarna API password | Yes |
| `KLARNA_BASE_URL` | Klarna API base URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
