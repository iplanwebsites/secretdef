# @secretdef/docassemble

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Docassemble** environment variables.

## Install

```bash
npm install @secretdef/docassemble secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/docassemble';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOCASSEMBLE_API_KEY` | Docassemble API key | Yes |
| `DOCASSEMBLE_URL` | Docassemble server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
