import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HMS_ACCESS_KEY: {
    description: '100ms access key',
    dashboard: 'https://dashboard.100ms.live/developer',
  },
  HMS_SECRET: {
    description: '100ms app secret',
    dashboard: 'https://dashboard.100ms.live/developer',
  },
});
