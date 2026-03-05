import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SONAR_TOKEN: { description: 'SonarQube authentication token',
    dashboard: 'https://docs.sonarqube.org/latest/user-guide/user-account/generating-and-using-tokens/' },
  SONAR_HOST_URL: { description: 'SonarQube server URL',
    dashboard: 'https://docs.sonarqube.org/latest/', required: false, validate: 'url' },
});
