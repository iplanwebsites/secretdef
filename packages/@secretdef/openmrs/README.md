# @secretdef/openmrs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenMRS** environment variables.

## Install

```bash
npm install @secretdef/openmrs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/openmrs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENMRS_BASE_URL` | OpenMRS server base URL | Yes |
| `OPENMRS_USERNAME` | OpenMRS username | Yes |
| `OPENMRS_PASSWORD` | OpenMRS password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
