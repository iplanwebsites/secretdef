import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INSPECTLET_WID: {
    description: 'Inspectlet website ID',
    dashboard: 'https://www.inspectlet.com',
  },
});
