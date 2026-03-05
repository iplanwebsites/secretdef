import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INNGEST_EVENT_KEY: {
    description: 'Inngest event key',
    dashboard: 'https://app.inngest.com/',
  },
  INNGEST_SIGNING_KEY: {
    description: 'Inngest signing key for webhook verification',
    dashboard: 'https://app.inngest.com/',
  },
  INNGEST_SIGNING_KEY_FALLBACK: {
    description: 'Fallback signing key for key rotation',
    dashboard: 'https://app.inngest.com/',
    required: false,
  },
  INNGEST_ENV: {
    description: 'Inngest environment name',
    dashboard: 'https://docs.inngest.com/',
    required: false,
  },
});
