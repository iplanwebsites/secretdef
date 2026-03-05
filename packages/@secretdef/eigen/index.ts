import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EIGEN_API_KEY: {
    description: 'Eigen Technologies API key',
    dashboard: 'https://www.eigentech.com',
  },
});
