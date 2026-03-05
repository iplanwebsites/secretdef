import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TIGERBEETLE_CLUSTER_ID: {
    description: 'TigerBeetle cluster ID',
    dashboard: 'https://tigerbeetle.com',
  },
  TIGERBEETLE_ADDRESSES: {
    description: 'TigerBeetle addresses',
    dashboard: 'https://tigerbeetle.com',
  },
});
