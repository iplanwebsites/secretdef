import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BARKODERS_LICENSE_KEY: {
    description: 'Barkoders barcode SDK license key',
    dashboard: 'https://barkoder.com',
  },
});
