# @secretdef/trackjs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TrackJS** environment variables.

## Install

```bash
npm install @secretdef/trackjs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/trackjs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRACKJS_TOKEN` | TrackJS application token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
