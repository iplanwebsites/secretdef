import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TWILIO_ACCOUNT_SID: {
    description: 'Twilio account SID — https://console.twilio.com',
  },
  TWILIO_AUTH_TOKEN: {
    description: 'Twilio auth token — https://console.twilio.com',
  },
});
