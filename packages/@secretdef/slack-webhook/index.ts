import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SLACK_WEBHOOK_URL: {
    description: 'Slack incoming webhook URL',
    dashboard: 'https://api.slack.com/apps',
    validate: 'url',
  },
});
