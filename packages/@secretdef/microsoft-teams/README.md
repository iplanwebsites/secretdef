# @secretdef/microsoft-teams

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Microsoft Teams** environment variables.

## Install

```bash
npm install @secretdef/microsoft-teams secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/microsoft-teams';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TEAMS_BOT_ID` | Teams bot ID | Yes |
| `TEAMS_BOT_PASSWORD` | Teams bot password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
