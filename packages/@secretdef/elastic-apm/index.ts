import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ELASTIC_APM_SERVER_URL: {
    description: 'Elastic APM server URL',
    dashboard: 'https://www.elastic.co/guide/en/apm/agent/nodejs/',
    validate: 'url',
  },
  ELASTIC_APM_SECRET_TOKEN: {
    description: 'Elastic APM secret token',
    dashboard: 'https://www.elastic.co/guide/en/apm/agent/nodejs/current/configuration.html',
  },
  ELASTIC_APM_SERVICE_NAME: {
    description: 'Elastic APM service name',
    dashboard: 'https://www.elastic.co/guide/en/apm/agent/nodejs/current/configuration.html',
    required: false,
  },
});
