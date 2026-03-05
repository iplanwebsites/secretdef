# @secretdef/commandbar

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CommandBar** environment variables.

## Install

```bash
npm install @secretdef/commandbar secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/commandbar';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COMMANDBAR_ORG_ID` | CommandBar organization ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
