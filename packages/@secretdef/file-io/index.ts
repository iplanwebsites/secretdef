import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FILEIO_API_KEY: {
    description: 'File.io API key',
    dashboard: 'https://www.file.io/developers',
  },
});
