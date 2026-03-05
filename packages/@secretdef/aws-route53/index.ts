import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AWS_ROUTE53_HOSTED_ZONE_ID: {
    description: 'Route 53 hosted zone ID',
    dashboard: 'https://console.aws.amazon.com/route53',
  },
});
