# @secretdef/jotform

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **JotForm** environment variables.

## Install

```bash
npm install @secretdef/jotform secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/jotform';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `JOTFORM_API_KEY` | JotForm API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
