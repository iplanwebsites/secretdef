# @secretdef/friendly-captcha

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Friendly Captcha** environment variables.

## Install

```bash
npm install @secretdef/friendly-captcha secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/friendly-captcha';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRIENDLY_CAPTCHA_SITEKEY` | Friendly Captcha site key | Yes |
| `FRIENDLY_CAPTCHA_SECRET` | Friendly Captcha secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
