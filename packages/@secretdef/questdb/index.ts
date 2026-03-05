import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QUESTDB_HOST: {
    description: 'QuestDB host',
    dashboard: 'https://cloud.questdb.io',
  },
  QUESTDB_PORT: {
    description: 'QuestDB port',
    dashboard: 'https://cloud.questdb.io',
    required: false,
  },
});
