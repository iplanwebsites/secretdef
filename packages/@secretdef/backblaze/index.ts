import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  B2_APPLICATION_KEY_ID: {
    description: 'Backblaze B2 application key ID',
    dashboard: 'https://secure.backblaze.com/app_keys.htm',
  },
  B2_APPLICATION_KEY: {
    description: 'Backblaze B2 application key',
    dashboard: 'https://secure.backblaze.com/app_keys.htm',
  },
  B2_BUCKET_ID: {
    description: 'Backblaze B2 bucket ID',
    dashboard: 'https://secure.backblaze.com/b2_buckets.htm',
    required: false,
  },
});
