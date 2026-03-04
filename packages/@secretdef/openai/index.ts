import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENAI_API_KEY: {
    description: 'OpenAI API key — https://platform.openai.com/api-keys',
  },
  OPENAI_ORG_ID: {
    description: 'OpenAI organization ID — https://platform.openai.com/account/organization',
    required: false,
  },
});
