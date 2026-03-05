import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OBSIDIAN_API_TOKEN: {
    description: 'Obsidian Publish API token',
    dashboard: 'https://obsidian.md',
  },
});
