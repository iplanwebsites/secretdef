import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TODOIST_API_KEY: {
    description: 'Todoist API token',
    dashboard: 'https://todoist.com/prefs/integrations',
  },
});
