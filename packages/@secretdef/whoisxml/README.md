# @secretdef/whoisxml

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **WhoisXML API** environment variables.

## Install

```bash
npm install @secretdef/whoisxml secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/whoisxml';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WHOISXML_API_KEY` | WhoisXML API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
