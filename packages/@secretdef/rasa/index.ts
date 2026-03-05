import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RASA_PRO_LICENSE: {
    description: 'Rasa Pro license key',
    dashboard: 'https://rasa.com',
  },
});
