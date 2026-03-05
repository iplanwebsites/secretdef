import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EVENTBRITE_API_KEY: {
    description: 'Eventbrite API key',
    dashboard: 'https://www.eventbrite.com/platform/api-keys',
  },
  EVENTBRITE_PRIVATE_TOKEN: {
    description: 'Eventbrite private token',
    dashboard: 'https://www.eventbrite.com/platform/api-keys',
    required: false,
  },
});
