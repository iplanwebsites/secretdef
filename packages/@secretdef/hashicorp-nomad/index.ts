import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NOMAD_TOKEN: {
    description: 'Nomad ACL token',
    dashboard: 'https://www.nomadproject.io',
  },
  NOMAD_ADDR: {
    description: 'Nomad server address',
    dashboard: 'https://www.nomadproject.io',
    required: false,
  },
});
