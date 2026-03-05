import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FULLSTORY_ORG_ID: {
    description: 'FullStory organization ID',
    dashboard: 'https://app.fullstory.com',
  },
  FULLSTORY_API_KEY: {
    description: 'FullStory API key',
    dashboard: 'https://app.fullstory.com',
    required: false,
  },
});
