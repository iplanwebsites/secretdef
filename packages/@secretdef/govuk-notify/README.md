# @secretdef/govuk-notify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GOV.UK Notify** environment variables.

## Install

```bash
npm install @secretdef/govuk-notify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/govuk-notify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOVUK_NOTIFY_API_KEY` | GOV.UK Notify API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
