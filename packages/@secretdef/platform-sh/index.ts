import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLATFORMSH_CLI_TOKEN: {
    description: 'Platform.sh CLI token',
    dashboard: 'https://accounts.platform.sh/user/settings',
  },
});
