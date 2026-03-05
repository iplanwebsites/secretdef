import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CAPTCHAFOX_SECRET: {
    description: 'CaptchaFox secret key',
    dashboard: 'https://portal.captchafox.com',
  },
  CAPTCHAFOX_SITE_KEY: {
    description: 'CaptchaFox site key',
    dashboard: 'https://portal.captchafox.com',
    required: false,
  },
});
