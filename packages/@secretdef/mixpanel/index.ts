import { defineSecrets } from 'secretdef';
export const secrets = defineSecrets({
  MIXPANEL_TOKEN: { description: 'Mixpanel project token',
    dashboard: 'https://mixpanel.com/settings/project/' },
});
