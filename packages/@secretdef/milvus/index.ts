import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MILVUS_URI: {
    description: 'Milvus connection URI',
    dashboard: 'https://cloud.zilliz.com',
    validate: 'url',
  },
  MILVUS_TOKEN: {
    description: 'Milvus auth token',
    dashboard: 'https://cloud.zilliz.com',
    required: false,
  },
});
