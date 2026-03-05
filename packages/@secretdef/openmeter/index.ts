import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENMETER_API_KEY: {
    description: 'OpenMeter API key',
    dashboard: 'https://openmeter.cloud',
  },
});
