import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VONAGE_API_KEY: {
    description: 'Vonage API key for authentication',
    dashboard: 'https://dashboard.nexmo.com/settings',
  },
  VONAGE_API_SECRET: {
    description: 'Vonage API secret for authentication',
    dashboard: 'https://dashboard.nexmo.com/settings',
  },
  VONAGE_APPLICATION_ID: {
    description: 'Vonage application ID for JWT-based authentication',
    dashboard: 'https://dashboard.nexmo.com/applications',
    required: false,
  },
  VONAGE_APPLICATION_PRIVATE_KEY_PATH: {
    description: 'Path to private key file for Vonage application',
    dashboard: 'https://dashboard.nexmo.com/applications',
    required: false,
  },
  VONAGE_SIGNATURE_SECRET: {
    description: 'Vonage signature secret for webhook verification',
    dashboard: 'https://dashboard.nexmo.com/settings',
    required: false,
  },
});
