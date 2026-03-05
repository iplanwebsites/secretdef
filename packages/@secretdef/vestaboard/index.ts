import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VESTABOARD_API_KEY: {
    description: 'Vestaboard API key',
    dashboard: 'https://www.vestaboard.com/developer',
  },
  VESTABOARD_API_SECRET: {
    description: 'Vestaboard API secret',
    dashboard: 'https://www.vestaboard.com/developer',
  },
});
