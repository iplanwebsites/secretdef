# @secretdef/github-packages

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GitHub Packages** environment variables.

## Install

```bash
npm install @secretdef/github-packages secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/github-packages';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_PACKAGES_TOKEN` | GitHub personal access token for Packages | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
