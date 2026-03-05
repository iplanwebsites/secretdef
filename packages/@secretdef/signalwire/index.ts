import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIGNALWIRE_PROJECT_ID: {
    description: 'SignalWire project ID',
    dashboard: 'https://signalwire.com',
  },
  SIGNALWIRE_TOKEN: {
    description: 'SignalWire API token',
    dashboard: 'https://signalwire.com',
  },
  SIGNALWIRE_SPACE: {
    description: 'SignalWire space name',
    dashboard: 'https://signalwire.com',
  },
});
