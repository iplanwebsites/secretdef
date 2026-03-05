import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRIENDLY_CAPTCHA_SITEKEY: {
    description: 'Friendly Captcha site key',
    dashboard: 'https://friendlycaptcha.com/dashboard',
  },
  FRIENDLY_CAPTCHA_SECRET: {
    description: 'Friendly Captcha secret key',
    dashboard: 'https://friendlycaptcha.com/dashboard',
  },
});
