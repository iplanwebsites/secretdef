import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SENTRY_DSN: {
    description: 'Sentry Data Source Name',
    dashboard: 'https://sentry.io/settings/projects/',
  },
  SENTRY_AUTH_TOKEN: {
    description: 'Sentry auth token for releases and source maps',
    dashboard: 'https://sentry.io/settings/account/api/auth-tokens/',
    required: false,
  },
  SENTRY_ORG: {
    description: 'Sentry organization slug',
    dashboard: 'https://sentry.io/settings/',
    required: false,
  },
  SENTRY_PROJECT: {
    description: 'Sentry project slug',
    dashboard: 'https://sentry.io/settings/projects/',
    required: false,
  },
  SENTRY_ENVIRONMENT: {
    description: 'Sentry environment tag (e.g. production, staging)',
    dashboard: 'https://docs.sentry.io/',
    required: false,
  },
  SENTRY_RELEASE: {
    description: 'Sentry release version identifier',
    dashboard: 'https://docs.sentry.io/',
    required: false,
  },
});
