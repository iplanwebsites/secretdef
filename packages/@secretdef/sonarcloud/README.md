# @secretdef/sonarcloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SonarCloud** environment variables.

## Install

```bash
npm install @secretdef/sonarcloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sonarcloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SONARCLOUD_TOKEN` | SonarCloud token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
