import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WIREMOCK_CLOUD_TOKEN: {
    description: 'WireMock Cloud API token',
    dashboard: 'https://app.wiremock.cloud',
  },
});
