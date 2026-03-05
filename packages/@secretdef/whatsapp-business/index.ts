import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WHATSAPP_ACCESS_TOKEN: {
    description: 'WhatsApp Business access token',
    dashboard: 'https://developers.facebook.com/apps',
  },
  WHATSAPP_PHONE_NUMBER_ID: {
    description: 'WhatsApp phone number ID',
    dashboard: 'https://developers.facebook.com/apps',
  },
  WHATSAPP_BUSINESS_ACCOUNT_ID: {
    description: 'WhatsApp Business account ID',
    dashboard: 'https://developers.facebook.com/apps',
  },
});
