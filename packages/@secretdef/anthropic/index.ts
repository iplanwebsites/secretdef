import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ANTHROPIC_API_KEY: {
    description: 'Anthropic API key — https://console.anthropic.com/settings/keys',
  },
});
