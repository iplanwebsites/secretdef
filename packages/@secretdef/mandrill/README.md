# @secretdef/mandrill

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mandrill (Mailchimp Transactional)** environment variables.

## Install

```bash
npm install @secretdef/mandrill secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mandrill';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MANDRILL_API_KEY` | Mandrill API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
