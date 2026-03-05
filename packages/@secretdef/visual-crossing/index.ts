import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VISUAL_CROSSING_API_KEY: {
    description: 'Visual Crossing weather API key',
    dashboard: 'https://www.visualcrossing.com/account',
  },
});
