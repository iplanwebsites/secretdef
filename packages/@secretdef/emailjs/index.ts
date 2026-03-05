import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EMAILJS_SERVICE_ID: {
    description: 'EmailJS service ID',
    dashboard: 'https://dashboard.emailjs.com',
  },
  EMAILJS_TEMPLATE_ID: {
    description: 'EmailJS template ID',
    dashboard: 'https://dashboard.emailjs.com',
  },
  EMAILJS_PUBLIC_KEY: {
    description: 'EmailJS public key',
    dashboard: 'https://dashboard.emailjs.com',
  },
});
