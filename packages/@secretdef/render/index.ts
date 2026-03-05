import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RENDER_API_KEY: {
    description: 'Render API key',
    dashboard: 'https://dashboard.render.com/u/settings',
  },
});
