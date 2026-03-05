import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PANDADOC_API_KEY: {
    description: 'PandaDoc API key',
    dashboard: 'https://app.pandadoc.com/a/#/settings/integrations/api',
  },
});
