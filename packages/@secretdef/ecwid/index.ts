import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ECWID_STORE_ID: {
    description: 'Ecwid store ID',
    dashboard: 'https://my.ecwid.com',
  },
  ECWID_SECRET_TOKEN: {
    description: 'Ecwid secret API token',
    dashboard: 'https://my.ecwid.com/cp/CP.html#develop-apps',
  },
});
