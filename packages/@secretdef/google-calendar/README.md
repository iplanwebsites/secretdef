# @secretdef/google-calendar

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Calendar** environment variables.

## Install

```bash
npm install @secretdef/google-calendar secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-calendar';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CALENDAR_CLIENT_ID` | Google Calendar OAuth client ID | Yes |
| `GOOGLE_CALENDAR_CLIENT_SECRET` | Google Calendar OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
