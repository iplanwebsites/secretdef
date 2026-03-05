import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LANGFUSE_PUBLIC_KEY: {
    description: 'Langfuse public key',
    dashboard: 'https://cloud.langfuse.com/settings',
  },
  LANGFUSE_SECRET_KEY: {
    description: 'Langfuse secret key',
    dashboard: 'https://cloud.langfuse.com/settings',
  },
  LANGFUSE_BASEURL: {
    description: 'Langfuse base URL (self-hosted)',
    dashboard: 'https://cloud.langfuse.com',
    validate: 'url',
    required: false,
  },
});
