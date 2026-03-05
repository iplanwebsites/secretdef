# @secretdef/indicio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Indicio** environment variables.

## Install

```bash
npm install @secretdef/indicio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/indicio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INDICIO_API_KEY` | Indicio API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
