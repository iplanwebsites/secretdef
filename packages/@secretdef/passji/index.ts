import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PASSJI_CLIENT_ID: {
    description: 'Passji OAuth client ID',
    dashboard: 'https://passji.com/developer',
  },
  PASSJI_CLIENT_SECRET: {
    description: 'Passji OAuth client secret',
    dashboard: 'https://passji.com/developer',
  },
  PASSJI_ISSUER: {
    description: 'Passji issuer URL (defaults to https://passji.com)',
    dashboard: 'https://passji.com',
    environments: {
      development: { required: false, default: 'https://passji.com' },
      production: { required: false, default: 'https://passji.com' },
    },
  },
});
