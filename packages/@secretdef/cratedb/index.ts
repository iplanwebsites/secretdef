import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CRATEDB_HOST: {
    description: 'CrateDB host',
    dashboard: 'https://console.cratedb.cloud',
  },
  CRATEDB_USER: {
    description: 'CrateDB username',
    dashboard: 'https://console.cratedb.cloud',
  },
  CRATEDB_PASSWORD: {
    description: 'CrateDB password',
    dashboard: 'https://console.cratedb.cloud',
  },
});
