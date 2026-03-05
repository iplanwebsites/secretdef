import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AMCHARTS_LICENSE: {
    description: 'amCharts license key',
    dashboard: 'https://www.amcharts.com/account/',
  },
});
