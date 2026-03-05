import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VAPOR_API_TOKEN: {
    description: 'Laravel Vapor API token',
    dashboard: 'https://vapor.laravel.com',
  },
});
