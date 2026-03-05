import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPOONACULAR_API_KEY: {
    description: 'Spoonacular API key',
    dashboard: 'https://spoonacular.com/food-api/console#Dashboard',
  },
});
