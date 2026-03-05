import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TMDB_API_KEY: {
    description: 'TMDB API key',
    dashboard: 'https://www.themoviedb.org/settings/api',
  },
});
