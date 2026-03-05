import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DASHSCOPE_API_KEY: {
    description: 'DashScope API key for Qwen models',
    dashboard: 'https://dashscope.console.aliyun.com/apiKey',
  },
});
