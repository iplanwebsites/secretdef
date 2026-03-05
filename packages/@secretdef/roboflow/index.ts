import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROBOFLOW_API_KEY: {
    description: 'Roboflow API key',
    dashboard: 'https://app.roboflow.com',
  },
});
