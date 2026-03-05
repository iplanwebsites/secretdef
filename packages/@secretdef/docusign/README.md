# @secretdef/docusign

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DocuSign** environment variables.

## Install

```bash
npm install @secretdef/docusign secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/docusign';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOCUSIGN_INTEGRATION_KEY` | DocuSign integration key | Yes |
| `DOCUSIGN_USER_ID` | DocuSign user ID | Yes |
| `DOCUSIGN_ACCOUNT_ID` | DocuSign account ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
