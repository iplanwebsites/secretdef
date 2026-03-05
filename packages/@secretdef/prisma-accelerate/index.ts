import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRISMA_ACCELERATE_API_KEY: {
    description: 'Prisma Accelerate connection pooler API key',
    dashboard: 'https://console.prisma.io',
  },
});
