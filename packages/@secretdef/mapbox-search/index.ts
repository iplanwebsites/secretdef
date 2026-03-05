import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAPBOX_SEARCH_TOKEN: {
    description: 'Mapbox Search API token',
    dashboard: 'https://account.mapbox.com/access-tokens/',
  },
});
