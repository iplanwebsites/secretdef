import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IMAGEKIT_PUBLIC_KEY: { description: 'ImageKit public key',
    dashboard: 'https://imagekit.io/dashboard/developer/api-keys' },
  IMAGEKIT_PRIVATE_KEY: { description: 'ImageKit private key',
    dashboard: 'https://imagekit.io/dashboard/developer/api-keys' },
  IMAGEKIT_URL_ENDPOINT: { description: 'ImageKit URL endpoint',
    dashboard: 'https://imagekit.io/dashboard/url-endpoints', validate: 'url' },
});
