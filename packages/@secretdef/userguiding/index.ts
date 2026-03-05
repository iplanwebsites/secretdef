import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  USERGUIDING_TOKEN: {
    description: 'UserGuiding token',
    dashboard: 'https://panel.userguiding.com',
  },
});
