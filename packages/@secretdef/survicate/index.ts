import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SURVICATE_WORKSPACE_KEY: {
    description: 'Survicate workspace key',
    dashboard: 'https://panel.survicate.com',
  },
});
