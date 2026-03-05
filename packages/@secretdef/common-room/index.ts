import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COMMON_ROOM_API_TOKEN: {
    description: 'Common Room API token',
    dashboard: 'https://app.commonroom.io',
  },
});
