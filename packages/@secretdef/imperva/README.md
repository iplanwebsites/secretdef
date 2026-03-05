# @secretdef/imperva

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Imperva** environment variables.

## Install

```bash
npm install @secretdef/imperva secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/imperva';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IMPERVA_API_ID` | Imperva API identifier | Yes |
| `IMPERVA_API_KEY` | Imperva API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
