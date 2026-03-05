# @secretdef/wizardlm

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **WizardLM** environment variables.

## Install

```bash
npm install @secretdef/wizardlm secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wizardlm';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WIZARDLM_API_KEY` | WizardLM API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
