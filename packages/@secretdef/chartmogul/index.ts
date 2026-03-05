import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHARTMOGUL_API_KEY: {
    description: 'ChartMogul API key',
    dashboard: 'https://app.chartmogul.com',
  },
});
