import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ARGOCD_AUTH_TOKEN: {
    description: 'Argo CD authentication token',
    dashboard: 'https://argo-cd.readthedocs.io',
  },
  ARGOCD_SERVER: {
    description: 'Argo CD server URL',
    dashboard: 'https://argo-cd.readthedocs.io',
    validate: 'url',
    required: false,
  },
});
