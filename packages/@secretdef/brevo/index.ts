import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BREVO_API_KEY: { description: 'Brevo (Sendinblue) API key',
    dashboard: 'https://app.brevo.com/settings/keys/api' },
});
