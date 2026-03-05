import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIGMA_ACCESS_TOKEN: {
    description: 'Figma personal access token',
    dashboard: 'https://www.figma.com/developers/api#access-tokens',
  },
});
