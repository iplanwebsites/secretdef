import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MOONSHOT_API_KEY: {
    description: 'Moonshot AI API key',
    dashboard: 'https://platform.moonshot.cn/console/api-keys',
  },
});
