# @secretdef/virus-total

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **VirusTotal** environment variables.

## Install

```bash
npm install @secretdef/virus-total secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/virus-total';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VIRUSTOTAL_API_KEY` | VirusTotal API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
