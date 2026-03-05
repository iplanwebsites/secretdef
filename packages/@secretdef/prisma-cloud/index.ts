import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRISMA_CLOUD_ACCESS_KEY: {
    description: 'Prisma Cloud access key',
    dashboard: 'https://prismacloud.io',
  },
  PRISMA_CLOUD_SECRET_KEY: {
    description: 'Prisma Cloud secret key',
    dashboard: 'https://prismacloud.io',
  },
  PRISMA_CLOUD_API_URL: {
    description: 'Prisma Cloud API URL',
    dashboard: 'https://prismacloud.io',
    validate: 'url',
    required: false,
  },
});
