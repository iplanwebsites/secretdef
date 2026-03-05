# @secretdef/github-copilot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GitHub Copilot** environment variables.

## Install

```bash
npm install @secretdef/github-copilot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/github-copilot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_COPILOT_TOKEN` | GitHub Copilot token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
