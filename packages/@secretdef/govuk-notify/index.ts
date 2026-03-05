import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOVUK_NOTIFY_API_KEY: {
    description: 'GOV.UK Notify API key',
    dashboard: 'https://www.notifications.service.gov.uk',
  },
});
