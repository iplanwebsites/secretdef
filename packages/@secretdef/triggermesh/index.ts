import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRIGGERMESH_TOKEN: {
    description: 'TriggerMesh API token',
    dashboard: 'https://www.triggermesh.com',
  },
});
