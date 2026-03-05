import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHEETY_TOKEN: {
    description: 'Sheety bearer token',
    dashboard: 'https://sheety.co',
  },
});
