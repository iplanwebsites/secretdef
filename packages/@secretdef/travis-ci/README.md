# @secretdef/travis-ci

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Travis CI** environment variables.

## Install

```bash
npm install @secretdef/travis-ci secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/travis-ci';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRAVIS_CI_TOKEN` | Travis CI API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
