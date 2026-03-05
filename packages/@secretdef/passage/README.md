# @secretdef/passage

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Passage by 1Password** environment variables.

## Install

```bash
npm install @secretdef/passage secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/passage';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PASSAGE_APP_ID` | Passage app ID | Yes |
| `PASSAGE_API_KEY` | Passage API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
