import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SOCKET_SECURITY_API_KEY: {
    description: 'Socket Security API key',
    dashboard: 'https://socket.dev/dashboard',
  },
});
