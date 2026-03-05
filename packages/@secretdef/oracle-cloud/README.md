# @secretdef/oracle-cloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Oracle Cloud** environment variables.

## Install

```bash
npm install @secretdef/oracle-cloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/oracle-cloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OCI_TENANCY` | Oracle Cloud tenancy OCID | Yes |
| `OCI_USER` | Oracle Cloud user OCID | Yes |
| `OCI_FINGERPRINT` | Oracle Cloud API key fingerprint | Yes |
| `OCI_PRIVATE_KEY` | Oracle Cloud API private key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
