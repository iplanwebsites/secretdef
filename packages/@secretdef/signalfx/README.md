# @secretdef/signalfx

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SignalFx/Splunk Observability** environment variables.

## Install

```bash
npm install @secretdef/signalfx secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/signalfx';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SIGNALFX_API_TOKEN` | SignalFx API access token | Yes |
| `SIGNALFX_REALM` | SignalFx realm | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
