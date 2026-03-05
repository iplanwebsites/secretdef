import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WIZARDLM_API_KEY: {
    description: 'WizardLM API key',
    dashboard: 'https://wizardlm.github.io',
  },
});
