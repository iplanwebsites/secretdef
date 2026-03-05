import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SCRAPINGBEE_API_KEY: {
    description: 'ScrapingBee API key',
    dashboard: 'https://app.scrapingbee.com',
  },
});
