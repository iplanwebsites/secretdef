import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPLUNK_HEC_TOKEN: { description: 'Splunk HTTP Event Collector token',
    dashboard: 'https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector' },
  SPLUNK_HOST: { description: 'Splunk instance host',
    dashboard: 'https://docs.splunk.com/' },
  SPLUNK_PORT: { description: 'Splunk HEC port',
    dashboard: 'https://docs.splunk.com/', required: false },
});
