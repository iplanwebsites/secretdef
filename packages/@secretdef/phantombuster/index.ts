import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PHANTOMBUSTER_API_KEY: {
    description: 'PhantomBuster API key',
    dashboard: 'https://phantombuster.com/api-store',
  },
});
