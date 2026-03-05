import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MINIO_ENDPOINT: {
    description: 'MinIO endpoint URL',
    dashboard: 'https://min.io',
    validate: 'url',
  },
  MINIO_ACCESS_KEY: {
    description: 'MinIO access key',
    dashboard: 'https://min.io',
  },
  MINIO_SECRET_KEY: {
    description: 'MinIO secret key',
    dashboard: 'https://min.io',
  },
});
