import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BULLMQ_PRO_TOKEN: {
    description: 'BullMQ Pro license token',
    dashboard: 'https://bullmq.io',
  },
});
