# @secretdef/crowdstrike

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CrowdStrike** environment variables.

## Install

```bash
npm install @secretdef/crowdstrike secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/crowdstrike';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CROWDSTRIKE_CLIENT_ID` | CrowdStrike client ID | Yes |
| `CROWDSTRIKE_CLIENT_SECRET` | CrowdStrike client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
