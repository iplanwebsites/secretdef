# @secretdef/docker-hub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Docker Hub** environment variables.

## Install

```bash
npm install @secretdef/docker-hub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/docker-hub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOCKER_USERNAME` | Docker Hub username | Yes |
| `DOCKER_PASSWORD` | Docker Hub access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
