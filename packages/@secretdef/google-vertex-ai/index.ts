import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VERTEX_AI_LOCATION: {
    description: 'Vertex AI region (e.g. us-central1)',
    dashboard: 'https://console.cloud.google.com/vertex-ai',
  },
  VERTEX_AI_PROJECT: {
    description: 'Google Cloud project for Vertex AI',
    dashboard: 'https://console.cloud.google.com/vertex-ai',
    required: false,
  },
});
