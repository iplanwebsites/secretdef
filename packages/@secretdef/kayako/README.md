# @secretdef/kayako

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Kayako** environment variables.

## Install

```bash
npm install @secretdef/kayako secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/kayako';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KAYAKO_URL` | Kayako instance URL | Yes |
| `KAYAKO_EMAIL` | Kayako admin email | Yes |
| `KAYAKO_PASSWORD` | Kayako admin password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
