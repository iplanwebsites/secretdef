import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ARTIFACTORY_URL: {
    description: 'JFrog Artifactory URL',
    dashboard: 'https://jfrog.com',
    validate: 'url',
  },
  ARTIFACTORY_API_KEY: {
    description: 'JFrog Artifactory API key',
    dashboard: 'https://jfrog.com',
  },
});
