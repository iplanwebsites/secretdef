# @secretdef/crates-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Crates.io** environment variables.

## Install

```bash
npm install @secretdef/crates-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/crates-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CRATES_TOKEN` | Crates.io publish token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
