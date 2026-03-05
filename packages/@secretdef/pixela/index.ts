import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PIXELA_USERNAME: {
    description: 'Pixela username',
    dashboard: 'https://pixe.la',
  },
  PIXELA_TOKEN: {
    description: 'Pixela token',
    dashboard: 'https://pixe.la',
  },
});
