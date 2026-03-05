import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ELASTIC_CLOUD_AUTH: {
    description: 'Elastic Cloud authentication credentials',
    dashboard: 'https://cloud.elastic.co',
  },
  ELASTIC_CLOUD_DEPLOYMENT_ID: {
    description: 'Elastic Cloud deployment ID',
    dashboard: 'https://cloud.elastic.co',
    required: false,
  },
});
