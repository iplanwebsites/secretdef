import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TWILIO_ACCOUNT_SID: {
    description: 'Twilio account SID',
    dashboard: 'https://console.twilio.com',
  },
  TWILIO_AUTH_TOKEN: {
    description: 'Twilio auth token',
    dashboard: 'https://console.twilio.com',
  },
  TWILIO_REGION: {
    description: 'Twilio API region',
    dashboard: 'https://www.twilio.com/docs/global-infrastructure',
    required: false,
  },
  TWILIO_EDGE: {
    description: 'Twilio edge location',
    dashboard: 'https://www.twilio.com/docs/global-infrastructure/edge-locations',
    required: false,
  },
  TWILIO_LOG_LEVEL: {
    description: 'Twilio SDK log level',
    dashboard: 'https://www.twilio.com/docs',
    required: false,
  },
});
