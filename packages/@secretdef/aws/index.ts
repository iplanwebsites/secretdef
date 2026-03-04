import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AWS_ACCESS_KEY_ID: {
    description: 'AWS access key ID — https://console.aws.amazon.com/iam/home#/security_credentials',
  },
  AWS_SECRET_ACCESS_KEY: {
    description: 'AWS secret access key — https://console.aws.amazon.com/iam/home#/security_credentials',
  },
  AWS_REGION: {
    description: 'AWS region — https://docs.aws.amazon.com/general/latest/gr/rande.html',
    required: false,
  },
});
