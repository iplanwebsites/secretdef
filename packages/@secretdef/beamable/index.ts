import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BEAMABLE_CID: {
    description: 'Beamable customer ID',
    dashboard: 'https://portal.beamable.com',
  },
  BEAMABLE_PID: {
    description: 'Beamable project ID',
    dashboard: 'https://portal.beamable.com',
  },
  BEAMABLE_ACCESS_TOKEN: {
    description: 'Beamable access token',
    dashboard: 'https://portal.beamable.com',
  },
});
