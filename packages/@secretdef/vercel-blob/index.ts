import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BLOB_READ_WRITE_TOKEN: {
    description: 'Vercel Blob read-write token',
    dashboard: 'https://vercel.com/dashboard/stores',
  },
});
