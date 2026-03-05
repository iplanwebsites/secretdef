import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OMDB_API_KEY: {
    description: 'OMDb API key',
    dashboard: 'https://www.omdbapi.com/apikey.aspx',
  },
});
