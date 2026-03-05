import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHEETDB_API_ID: {
    description: 'SheetDB API ID',
    dashboard: 'https://sheetdb.io',
  },
});
