import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ANTHROPIC_API_KEY: {
    description: 'Anthropic API key — https://console.anthropic.com/settings/keys',
  },
  ANTHROPIC_AUTH_TOKEN: {
    description: 'Anthropic auth token (alternative to API key) — https://console.anthropic.com/settings/keys',
    required: false,
  },
  ANTHROPIC_BASE_URL: {
    description: 'Override base URL for API requests — https://docs.anthropic.com',
    required: false,
  },
  ANTHROPIC_ORG_ID: {
    description: 'Anthropic organization ID — https://console.anthropic.com/settings/organization',
    required: false,
  },
  ANTHROPIC_BEDROCK_BASE_URL: {
    description: 'AWS Bedrock endpoint URL — https://docs.aws.amazon.com/bedrock/',
    required: false,
  },
  ANTHROPIC_FOUNDRY_API_KEY: {
    description: 'Anthropic Foundry API key — https://console.anthropic.com',
    required: false,
  },
  ANTHROPIC_FOUNDRY_RESOURCE: {
    description: 'Anthropic Foundry resource name — https://console.anthropic.com',
    required: false,
  },
  ANTHROPIC_FOUNDRY_BASE_URL: {
    description: 'Anthropic Foundry endpoint URL — https://console.anthropic.com',
    required: false,
  },
});
