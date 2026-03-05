import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PASSAGE_APP_ID: {
    description: 'Passage app ID',
    dashboard: 'https://console.passage.id',
  },
  PASSAGE_API_KEY: {
    description: 'Passage API key',
    dashboard: 'https://console.passage.id',
    required: false,
  },
});
