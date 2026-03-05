import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LSIO_API_KEY: {
    description: 'LinuxServer.io API key',
    dashboard: 'https://www.linuxserver.io',
  },
});
