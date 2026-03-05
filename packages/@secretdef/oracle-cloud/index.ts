import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OCI_TENANCY: {
    description: 'Oracle Cloud tenancy OCID',
    dashboard: 'https://cloud.oracle.com',
  },
  OCI_USER: {
    description: 'Oracle Cloud user OCID',
    dashboard: 'https://cloud.oracle.com',
  },
  OCI_FINGERPRINT: {
    description: 'Oracle Cloud API key fingerprint',
    dashboard: 'https://cloud.oracle.com',
  },
  OCI_PRIVATE_KEY: {
    description: 'Oracle Cloud API private key',
    dashboard: 'https://cloud.oracle.com',
  },
});
