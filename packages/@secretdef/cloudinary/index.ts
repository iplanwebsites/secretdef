import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOUDINARY_CLOUD_NAME: {
    description: 'Cloudinary cloud name',
    dashboard: 'https://cloudinary.com/console/settings/access-keys',
    required: true,
  },
  CLOUDINARY_API_KEY: {
    description: 'Cloudinary API key',
    dashboard: 'https://cloudinary.com/console/settings/access-keys',
    required: true,
  },
  CLOUDINARY_API_SECRET: {
    description: 'Cloudinary API secret',
    dashboard: 'https://cloudinary.com/console/settings/access-keys',
    required: true,
  },
  CLOUDINARY_URL: {
    description: 'Cloudinary connection string (cloudinary://api_key:api_secret@cloud_name)',
    dashboard: 'https://cloudinary.com/console/settings/access-keys',
    required: false,
  },
});
