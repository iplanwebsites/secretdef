import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BOOKEO_API_KEY: {
    description: 'Bookeo API key',
    dashboard: 'https://www.bookeo.com',
  },
  BOOKEO_SECRET_KEY: {
    description: 'Bookeo secret key',
    dashboard: 'https://www.bookeo.com',
  },
});
