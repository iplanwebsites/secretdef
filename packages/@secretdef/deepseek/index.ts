import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEEPSEEK_API_KEY: {
    description: 'DeepSeek API key',
    dashboard: 'https://platform.deepseek.com/api_keys',
  },
});
