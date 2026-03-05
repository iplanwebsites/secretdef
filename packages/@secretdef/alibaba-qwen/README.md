# @secretdef/alibaba-qwen

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Alibaba Qwen (DashScope)** environment variables.

## Install

```bash
npm install @secretdef/alibaba-qwen secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/alibaba-qwen';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DASHSCOPE_API_KEY` | DashScope API key for Qwen models | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
