# @secretdef/surveymonkey

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SurveyMonkey** environment variables.

## Install

```bash
npm install @secretdef/surveymonkey secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/surveymonkey';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SURVEYMONKEY_ACCESS_TOKEN` | SurveyMonkey access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
