# @secretdef/semgrep

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Semgrep** environment variables.

## Install

```bash
npm install @secretdef/semgrep secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/semgrep';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SEMGREP_APP_TOKEN` | Semgrep app token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
