import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INFLUXDB_URL: {
    description: 'InfluxDB URL',
    dashboard: 'https://cloud2.influxdata.com',
    validate: 'url',
  },
  INFLUXDB_TOKEN: {
    description: 'InfluxDB API token',
    dashboard: 'https://cloud2.influxdata.com',
  },
  INFLUXDB_ORG: {
    description: 'InfluxDB organization',
    dashboard: 'https://cloud2.influxdata.com',
    required: false,
  },
  INFLUXDB_BUCKET: {
    description: 'InfluxDB bucket name',
    dashboard: 'https://cloud2.influxdata.com',
    required: false,
  },
});
