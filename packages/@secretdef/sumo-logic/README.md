# @secretdef/sumo-logic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sumo Logic** environment variables.

## Install

```bash
npm install @secretdef/sumo-logic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sumo-logic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SUMO_LOGIC_ACCESS_ID` | Sumo Logic access ID | Yes |
| `SUMO_LOGIC_ACCESS_KEY` | Sumo Logic access key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
