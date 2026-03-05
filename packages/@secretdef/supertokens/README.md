# @secretdef/supertokens

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SuperTokens** environment variables.

## Install

```bash
npm install @secretdef/supertokens secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/supertokens';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SUPERTOKENS_CONNECTION_URI` | SuperTokens connection URI | Yes |
| `SUPERTOKENS_API_KEY` | SuperTokens API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
