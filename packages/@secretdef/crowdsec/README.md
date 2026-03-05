# @secretdef/crowdsec

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CrowdSec** environment variables.

## Install

```bash
npm install @secretdef/crowdsec secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/crowdsec';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CROWDSEC_API_KEY` | CrowdSec API key | Yes |
| `CROWDSEC_URL` | CrowdSec LAPI URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
