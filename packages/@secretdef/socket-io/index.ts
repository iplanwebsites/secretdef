import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SOCKETIO_SERVER_URL: {
    description: 'Socket.IO server URL',
    dashboard: 'https://socket.io',
    validate: 'url',
  },
  SOCKETIO_AUTH_TOKEN: {
    description: 'Socket.IO auth token',
    dashboard: 'https://socket.io',
    required: false,
  },
});
