import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SLACK_BOT_TOKEN: {
    description: 'Slack bot token for API authentication',
    dashboard: 'https://api.slack.com/apps',
  },
  SLACK_SIGNING_SECRET: {
    description: 'Slack app signing secret for request verification',
    dashboard: 'https://api.slack.com/apps',
  },
  SLACK_APP_TOKEN: {
    description: 'Slack app-level token for Socket Mode connections',
    dashboard: 'https://api.slack.com/apps',
    required: false,
  },
});
