import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KALEYRA_API_KEY: {
    description: 'Kaleyra API key',
    dashboard: 'https://developers.kaleyra.io',
  },
  KALEYRA_SID: {
    description: 'Kaleyra account SID',
    dashboard: 'https://developers.kaleyra.io',
  },
});
