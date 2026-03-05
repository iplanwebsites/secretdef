import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SCRAPER_API_KEY: {
    description: 'ScraperAPI key',
    dashboard: 'https://www.scraperapi.com/dashboard',
  },
});
