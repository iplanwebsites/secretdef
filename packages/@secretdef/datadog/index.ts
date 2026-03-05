import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DD_API_KEY: {
    description: 'Datadog API key for sending metrics, traces, and logs',
    dashboard: 'https://app.datadoghq.com/organization-settings/api-keys',
    required: false,
  },
  DD_APP_KEY: {
    description: 'Datadog application key for API access',
    dashboard: 'https://app.datadoghq.com/organization-settings/api-keys',
    required: false,
  },
  DD_SITE: {
    description: 'Datadog site domain (e.g. datadoghq.com, datadoghq.eu)',
    dashboard: 'https://docs.datadoghq.com/getting_started/site/',
    required: false,
  },
  DD_ENV: {
    description: 'Environment name for tagging traces and logs (e.g. production, staging, development)',
    dashboard: 'https://docs.datadoghq.com/getting_started/tagging/',
    required: false,
  },
  DD_SERVICE: {
    description: 'Service name for identifying your application in Datadog',
    dashboard: 'https://docs.datadoghq.com/getting_started/tagging/unified_service_tagging/',
    required: false,
  },
  DD_VERSION: {
    description: 'Service version for tracking deployments and changes',
    dashboard: 'https://docs.datadoghq.com/getting_started/tagging/unified_service_tagging/',
    required: false,
  },
});
