import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOUDAMQP_URL: {
    description: 'CloudAMQP connection URL',
    dashboard: 'https://customer.cloudamqp.com',
    validate: 'url',
  },
});
