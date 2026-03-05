import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPOTINST_TOKEN: {
    description: 'Spot by NetApp API token',
    dashboard: 'https://console.spotinst.com',
  },
  SPOTINST_ACCOUNT: {
    description: 'Spot account ID',
    dashboard: 'https://console.spotinst.com',
    required: false,
  },
});
