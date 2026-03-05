import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GRAFANA_API_KEY: {
    description: 'Grafana API key or service account token',
    dashboard: 'https://grafana.com/docs/grafana/latest/administration/api-keys/',
  },
  GRAFANA_URL: {
    description: 'Grafana instance URL',
    dashboard: 'https://grafana.com/docs/grafana-cloud/',
    required: false,
  },
});
