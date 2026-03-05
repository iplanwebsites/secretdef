import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIRECRAWL_API_KEY: { description: 'Firecrawl API key',
    dashboard: 'https://www.firecrawl.dev/app/api-keys' },
});
