import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRESET_API_TOKEN: {
    description: 'Preset API token',
    dashboard: 'https://manage.app.preset.io',
  },
  PRESET_API_SECRET: {
    description: 'Preset API secret',
    dashboard: 'https://manage.app.preset.io',
  },
});
