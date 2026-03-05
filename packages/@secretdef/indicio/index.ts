import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INDICIO_API_KEY: {
    description: 'Indicio API key',
    dashboard: 'https://indicio.tech',
  },
});
