# @secretdef/churnzero

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ChurnZero** environment variables.

## Install

```bash
npm install @secretdef/churnzero secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/churnzero';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHURNZERO_API_KEY` | ChurnZero API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
