# @secretdef/emailjs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **EmailJS** environment variables.

## Install

```bash
npm install @secretdef/emailjs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/emailjs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAILJS_SERVICE_ID` | EmailJS service ID | Yes |
| `EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes |
| `EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
