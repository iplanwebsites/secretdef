import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROWY_SERVICE_ACCOUNT: {
    description: 'Rowy service account JSON (base64)',
    dashboard: 'https://rowy.io',
  },
});
