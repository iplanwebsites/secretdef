import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HCAPTCHA_SECRET_KEY: {
    description: 'hCaptcha secret key',
    dashboard: 'https://dashboard.hcaptcha.com/settings',
  },
  HCAPTCHA_SITE_KEY: {
    description: 'hCaptcha site key',
    dashboard: 'https://dashboard.hcaptcha.com/settings',
    required: false,
  },
});
