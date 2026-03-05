# @secretdef/captchafox

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CaptchaFox** environment variables.

## Install

```bash
npm install @secretdef/captchafox secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/captchafox';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CAPTCHAFOX_SECRET` | CaptchaFox secret key | Yes |
| `CAPTCHAFOX_SITE_KEY` | CaptchaFox site key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
