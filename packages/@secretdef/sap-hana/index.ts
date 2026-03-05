import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HANA_HOST: {
    description: 'SAP HANA host',
    dashboard: 'https://www.sap.com/products/hana.html',
  },
  HANA_PORT: {
    description: 'SAP HANA port',
    dashboard: 'https://www.sap.com/products/hana.html',
    required: false,
  },
  HANA_USER: {
    description: 'SAP HANA user',
    dashboard: 'https://www.sap.com/products/hana.html',
  },
  HANA_PASSWORD: {
    description: 'SAP HANA password',
    dashboard: 'https://www.sap.com/products/hana.html',
  },
});
