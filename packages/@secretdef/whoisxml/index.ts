import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WHOISXML_API_KEY: {
    description: 'WhoisXML API key',
    dashboard: 'https://user.whoisxmlapi.com/products',
  },
});
