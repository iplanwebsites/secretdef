import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SYNCFUSION_LICENSE_KEY: {
    description: 'Syncfusion license key',
    dashboard: 'https://www.syncfusion.com/account/manage-licenses',
  },
});
