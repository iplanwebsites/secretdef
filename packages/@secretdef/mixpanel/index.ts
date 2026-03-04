import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MIXPANEL_TOKEN: {
    envVar: 'MIXPANEL_TOKEN',
    description: 'Mixpanel project token — https://mixpanel.com/settings/project',
  },
});
