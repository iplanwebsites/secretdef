# @secretdef/browserstack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BrowserStack** environment variables.

## Install

```bash
npm install @secretdef/browserstack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/browserstack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BROWSERSTACK_USERNAME` | BrowserStack username | Yes |
| `BROWSERSTACK_ACCESS_KEY` | BrowserStack access key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
