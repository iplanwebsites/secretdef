# @secretdef/eventbrite

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Eventbrite** environment variables.

## Install

```bash
npm install @secretdef/eventbrite secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/eventbrite';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EVENTBRITE_API_KEY` | Eventbrite API key | Yes |
| `EVENTBRITE_PRIVATE_TOKEN` | Eventbrite private token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
