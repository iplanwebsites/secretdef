# @secretdef/jfrog-artifactory

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **JFrog Artifactory** environment variables.

## Install

```bash
npm install @secretdef/jfrog-artifactory secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/jfrog-artifactory';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ARTIFACTORY_URL` | JFrog Artifactory URL | Yes |
| `ARTIFACTORY_API_KEY` | JFrog Artifactory API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
