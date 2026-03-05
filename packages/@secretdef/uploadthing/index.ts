import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UPLOADTHING_TOKEN: {
    description: 'Uploadthing API token (base64 encoded JSON with apiKey, appId, regions)',
    dashboard: 'https://uploadthing.com/dashboard',
  },
  UPLOADTHING_API_URL: {
    description: 'Override API URL for Uploadthing requests',
    dashboard: 'https://uploadthing.com/dashboard',
    required: false,
  },
  UPLOADTHING_INGEST_URL: {
    description: 'Override ingest URL for file uploads',
    dashboard: 'https://uploadthing.com/dashboard',
    required: false,
  },
  UPLOADTHING_UTFS_HOST: {
    description: 'Override UTFS host domain',
    dashboard: 'https://uploadthing.com/dashboard',
    required: false,
  },
  UPLOADTHING_UFS_HOST: {
    description: 'Override UFS host domain',
    dashboard: 'https://uploadthing.com/dashboard',
    required: false,
  },
  UPLOADTHING_UFS_APP_ID_LOCATION: {
    description: 'Location of app ID in UFS requests (subdomain or path)',
    dashboard: 'https://uploadthing.com/dashboard',
    required: false,
  },
  UPLOADTHING_IS_DEV: {
    description: 'Enable development mode for Uploadthing',
    dashboard: 'https://uploadthing.com/dashboard',
    required: false,
  },
});
