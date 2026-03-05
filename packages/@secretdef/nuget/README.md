# @secretdef/nuget

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **NuGet** environment variables.

## Install

```bash
npm install @secretdef/nuget secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nuget';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NUGET_API_KEY` | NuGet publish API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
