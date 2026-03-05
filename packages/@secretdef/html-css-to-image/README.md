# @secretdef/html-css-to-image

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **HTML/CSS to Image** environment variables.

## Install

```bash
npm install @secretdef/html-css-to-image secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/html-css-to-image';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HCTI_API_USER_ID` | HCTI user ID | Yes |
| `HCTI_API_KEY` | HCTI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
