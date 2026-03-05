# @secretdef/sauce-labs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sauce Labs** environment variables.

## Install

```bash
npm install @secretdef/sauce-labs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sauce-labs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SAUCE_USERNAME` | Sauce Labs username | Yes |
| `SAUCE_ACCESS_KEY` | Sauce Labs access key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
