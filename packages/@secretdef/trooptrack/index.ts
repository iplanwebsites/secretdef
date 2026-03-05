import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TROOPTRACK_API_KEY: {
    description: 'TroopTrack API key',
    dashboard: 'https://trooptrack.com',
  },
});
