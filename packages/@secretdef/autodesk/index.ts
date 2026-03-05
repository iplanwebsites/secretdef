import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AUTODESK_CLIENT_ID: {
    description: 'Autodesk Forge client ID',
    dashboard: 'https://aps.autodesk.com/myapps/',
  },
  AUTODESK_CLIENT_SECRET: {
    description: 'Autodesk Forge client secret',
    dashboard: 'https://aps.autodesk.com/myapps/',
  },
});
