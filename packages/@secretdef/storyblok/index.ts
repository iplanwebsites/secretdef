import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  STORYBLOK_ACCESS_TOKEN: {
    description: 'Storyblok access token',
    dashboard: 'https://app.storyblok.com/',
  },
  STORYBLOK_PREVIEW_TOKEN: {
    description: 'Storyblok preview token',
    dashboard: 'https://app.storyblok.com/',
    required: false,
  },
});
