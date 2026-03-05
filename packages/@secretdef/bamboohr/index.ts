import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BAMBOOHR_API_KEY: {
    description: 'BambooHR API key',
    dashboard: 'https://www.bamboohr.com',
  },
  BAMBOOHR_SUBDOMAIN: {
    description: 'BambooHR company subdomain',
    dashboard: 'https://www.bamboohr.com',
  },
});
