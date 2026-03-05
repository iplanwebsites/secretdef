# @secretdef/servicem8

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ServiceM8** environment variables.

## Install

```bash
npm install @secretdef/servicem8 secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/servicem8';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SERVICEM8_USERNAME` | ServiceM8 API username | Yes |
| `SERVICEM8_PASSWORD` | ServiceM8 API password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
