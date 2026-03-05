import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OURA_ACCESS_TOKEN: {
    description: 'Oura Ring personal access token',
    dashboard: 'https://cloud.ouraring.com/personal-access-tokens',
  },
});
