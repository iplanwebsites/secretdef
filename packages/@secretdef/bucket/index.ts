import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BUCKET_SECRET_KEY: {
    description: 'Bucket secret key',
    dashboard: 'https://app.bucket.co',
  },
});
