import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PUBSUB_PROJECT_ID: {
    description: 'Google Cloud project ID for Pub/Sub',
    dashboard: 'https://console.cloud.google.com/cloudpubsub',
  },
  PUBSUB_EMULATOR_HOST: {
    description: 'Pub/Sub emulator host for local development',
    dashboard: 'https://cloud.google.com/pubsub/docs/emulator',
    required: false,
  },
});
