import { defineSecrets } from 'secretdef';
export const secrets = defineSecrets({
  ELASTICSEARCH_URL: { description: 'Elasticsearch cluster URL',
    dashboard: 'https://cloud.elastic.co/', validate: 'url' },
  ELASTICSEARCH_API_KEY: { description: 'Elasticsearch API key',
    dashboard: 'https://cloud.elastic.co/', required: false },
  ELASTIC_CLOUD_ID: { description: 'Elastic Cloud deployment ID',
    dashboard: 'https://cloud.elastic.co/', required: false },
});
