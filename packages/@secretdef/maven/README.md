# @secretdef/maven

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Maven Central** environment variables.

## Install

```bash
npm install @secretdef/maven secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/maven';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAVEN_USERNAME` | Maven Central username | Yes |
| `MAVEN_PASSWORD` | Maven Central password/token | Yes |
| `MAVEN_GPG_PASSPHRASE` | GPG passphrase for Maven signing | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
