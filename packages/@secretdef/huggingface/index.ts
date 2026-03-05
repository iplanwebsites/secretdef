import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HF_TOKEN: {
    description: 'Hugging Face API token for authentication',
    dashboard: 'https://huggingface.co/settings/tokens',
  },
  HF_ENDPOINT: {
    description: 'Custom Hugging Face Hub endpoint URL',
    dashboard: 'https://huggingface.co/settings/tokens',
    required: false,
  },
  HF_HOME: {
    description: 'Custom home directory for Hugging Face cache',
    dashboard: 'https://huggingface.co/docs',
    required: false,
  },
  HF_HUB_CACHE: {
    description: 'Custom cache directory for Hugging Face Hub',
    dashboard: 'https://huggingface.co/docs',
    required: false,
  },
  HUGGINGFACE_HUB_CACHE: {
    description: 'Alternative cache directory for Hugging Face Hub',
    dashboard: 'https://huggingface.co/docs',
    required: false,
  },
});
