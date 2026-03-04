import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TWILIO_ACCOUNT_SID: {
    description: 'Twilio account SID — https://console.twilio.com',
  },
  TWILIO_AUTH_TOKEN: {
    description: 'Twilio auth token — https://console.twilio.com',
  },
  TWILIO_REGION: {
    description: 'Twilio API region — https://www.twilio.com/docs/global-infrastructure',
    required: false,
  },
  TWILIO_EDGE: {
    description: 'Twilio edge location — https://www.twilio.com/docs/global-infrastructure/edge-locations',
    required: false,
  },
  TWILIO_LOG_LEVEL: {
    description: 'Twilio SDK log level — https://www.twilio.com/docs',
    required: false,
  },
});
