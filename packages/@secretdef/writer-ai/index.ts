import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WRITER_API_KEY: {
    description: 'Writer AI API key',
    dashboard: 'https://dev.writer.com/api-guides/quickstart',
  },
});
