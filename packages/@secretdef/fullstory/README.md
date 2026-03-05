# @secretdef/fullstory

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **FullStory** environment variables.

## Install

```bash
npm install @secretdef/fullstory secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fullstory';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FULLSTORY_ORG_ID` | FullStory organization ID | Yes |
| `FULLSTORY_API_KEY` | FullStory API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
