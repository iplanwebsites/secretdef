# @secretdef/amplitude-experiment

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Amplitude Experiment** environment variables.

## Install

```bash
npm install @secretdef/amplitude-experiment secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/amplitude-experiment';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AMPLITUDE_EXPERIMENT_KEY` | Amplitude Experiment deployment key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
