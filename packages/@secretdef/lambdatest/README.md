# @secretdef/lambdatest

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LambdaTest** environment variables.

## Install

```bash
npm install @secretdef/lambdatest secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lambdatest';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LT_USERNAME` | LambdaTest username | Yes |
| `LT_ACCESS_KEY` | LambdaTest access key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
