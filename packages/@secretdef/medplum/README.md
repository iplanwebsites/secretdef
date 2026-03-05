# @secretdef/medplum

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Medplum** environment variables.

## Install

```bash
npm install @secretdef/medplum secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/medplum';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MEDPLUM_CLIENT_ID` | Medplum client ID | Yes |
| `MEDPLUM_CLIENT_SECRET` | Medplum client secret | Yes |
| `MEDPLUM_BASE_URL` | Medplum base URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
