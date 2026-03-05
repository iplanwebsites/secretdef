import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MASTODON_ACCESS_TOKEN: {
    description: 'Mastodon access token',
    dashboard: 'https://mastodon.social/settings/applications',
  },
  MASTODON_INSTANCE_URL: {
    description: 'Mastodon instance URL',
    dashboard: 'https://mastodon.social',
    validate: 'url',
  },
});
