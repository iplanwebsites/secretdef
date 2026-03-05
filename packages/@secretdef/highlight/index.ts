import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HIGHLIGHT_PROJECT_ID: {
    description: 'Highlight project ID',
    dashboard: 'https://app.highlight.io',
  },
});
