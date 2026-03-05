import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOUDINARY_UPLOAD_PRESET: {
    description: 'Cloudinary upload preset',
    dashboard: 'https://console.cloudinary.com',
  },
});
