# @secretdef/signalwire

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SignalWire** environment variables.

## Install

```bash
npm install @secretdef/signalwire secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/signalwire';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SIGNALWIRE_PROJECT_ID` | SignalWire project ID | Yes |
| `SIGNALWIRE_TOKEN` | SignalWire API token | Yes |
| `SIGNALWIRE_SPACE` | SignalWire space name | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
