# @secretdef/glitchtip

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GlitchTip** environment variables.

## Install

```bash
npm install @secretdef/glitchtip secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/glitchtip';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GLITCHTIP_DSN` | GlitchTip DSN | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
