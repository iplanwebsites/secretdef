import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LLAMA_CLOUD_API_KEY: {
    description: 'LlamaCloud API key',
    dashboard: 'https://cloud.llamaindex.ai',
  },
});
