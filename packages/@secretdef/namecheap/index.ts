import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NAMECHEAP_API_USER: {
    description: 'Namecheap API username',
    dashboard: 'https://ap.www.namecheap.com/settings/tools/apiaccess',
  },
  NAMECHEAP_API_KEY: {
    description: 'Namecheap API key',
    dashboard: 'https://ap.www.namecheap.com/settings/tools/apiaccess',
  },
});
