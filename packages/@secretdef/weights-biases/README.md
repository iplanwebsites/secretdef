# @secretdef/weights-biases

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Weights & Biases** environment variables.

## Install

```bash
npm install @secretdef/weights-biases secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/weights-biases';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WANDB_API_KEY` | W&B API key | Yes |
| `WANDB_PROJECT` | W&B project name | No |
| `WANDB_ENTITY` | W&B entity (user or team) | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
