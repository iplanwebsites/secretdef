import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  METAAPI_TOKEN: {
    description: 'MetaApi auth token',
    dashboard: 'https://app.metaapi.cloud',
  },
});
