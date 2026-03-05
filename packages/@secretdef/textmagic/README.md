# @secretdef/textmagic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TextMagic** environment variables.

## Install

```bash
npm install @secretdef/textmagic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/textmagic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TEXTMAGIC_USERNAME` | TextMagic API username | Yes |
| `TEXTMAGIC_API_KEY` | TextMagic API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
