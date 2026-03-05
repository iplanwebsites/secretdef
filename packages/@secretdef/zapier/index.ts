import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZAPIER_NLA_API_KEY: {
    description: 'Zapier NLA API key',
    dashboard: 'https://nla.zapier.com/credentials/',
  },
});
