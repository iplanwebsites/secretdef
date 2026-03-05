import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REBUFF_API_TOKEN: {
    description: 'Rebuff prompt injection detection token',
    dashboard: 'https://rebuff.ai',
  },
});
