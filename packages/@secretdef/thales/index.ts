import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CIPHERTRUST_URL: {
    description: 'CipherTrust Manager URL',
    dashboard: 'https://cpl.thalesgroup.com',
    validate: 'url',
  },
  CIPHERTRUST_USERNAME: {
    description: 'CipherTrust username',
    dashboard: 'https://cpl.thalesgroup.com',
  },
  CIPHERTRUST_PASSWORD: {
    description: 'CipherTrust password',
    dashboard: 'https://cpl.thalesgroup.com',
  },
});
