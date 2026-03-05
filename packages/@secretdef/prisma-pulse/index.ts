import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRISMA_PULSE_API_KEY: {
    description: 'Prisma Pulse real-time API key',
    dashboard: 'https://console.prisma.io',
  },
});
