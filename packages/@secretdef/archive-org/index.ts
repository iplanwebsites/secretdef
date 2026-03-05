import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ARCHIVE_S3_ACCESS: {
    description: 'Archive.org S3-like access key',
    dashboard: 'https://archive.org/account/s3.php',
  },
  ARCHIVE_S3_SECRET: {
    description: 'Archive.org S3-like secret key',
    dashboard: 'https://archive.org/account/s3.php',
  },
});
