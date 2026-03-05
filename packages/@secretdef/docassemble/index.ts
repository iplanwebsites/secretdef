import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOCASSEMBLE_API_KEY: {
    description: 'Docassemble API key',
    dashboard: 'https://docassemble.org',
  },
  DOCASSEMBLE_URL: {
    description: 'Docassemble server URL',
    dashboard: 'https://docassemble.org',
    validate: 'url',
  },
});
