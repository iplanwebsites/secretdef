# @secretdef/beamable

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Beamable** environment variables.

## Install

```bash
npm install @secretdef/beamable secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/beamable';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BEAMABLE_CID` | Beamable customer ID | Yes |
| `BEAMABLE_PID` | Beamable project ID | Yes |
| `BEAMABLE_ACCESS_TOKEN` | Beamable access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
