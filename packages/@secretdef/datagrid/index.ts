import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATAGRID_API_KEY: {
    description: 'DataGrid API key',
    dashboard: 'https://datagrid.com',
  },
});
