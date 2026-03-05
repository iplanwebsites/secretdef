# @secretdef/dotdigital

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dotdigital** environment variables.

## Install

```bash
npm install @secretdef/dotdigital secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dotdigital';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOTDIGITAL_USERNAME` | Dotdigital API username | Yes |
| `DOTDIGITAL_PASSWORD` | Dotdigital API password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
