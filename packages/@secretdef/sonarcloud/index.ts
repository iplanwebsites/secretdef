import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SONARCLOUD_TOKEN: {
    description: 'SonarCloud token',
    dashboard: 'https://sonarcloud.io/account/security',
  },
});
