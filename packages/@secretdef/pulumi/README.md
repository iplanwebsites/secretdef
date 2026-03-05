# @secretdef/pulumi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pulumi** environment variables.

## Install

```bash
npm install @secretdef/pulumi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pulumi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PULUMI_ACCESS_TOKEN` | Pulumi access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
