import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RECAPTCHA_SECRET_KEY: { description: 'Google reCAPTCHA secret key',
    dashboard: 'https://www.google.com/recaptcha/admin' },
  RECAPTCHA_SITE_KEY: { description: 'Google reCAPTCHA site key',
    dashboard: 'https://www.google.com/recaptcha/admin', required: false },
});
