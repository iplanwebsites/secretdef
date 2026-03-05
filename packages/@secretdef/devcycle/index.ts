import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEVCYCLE_SERVER_SDK_KEY: {
    description: 'DevCycle server SDK key',
    dashboard: 'https://app.devcycle.com/r/environments',
  },
  DEVCYCLE_CLIENT_SDK_KEY: {
    description: 'DevCycle client SDK key',
    dashboard: 'https://app.devcycle.com/r/environments',
    required: false,
  },
});
