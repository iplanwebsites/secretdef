import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CRATES_TOKEN: {
    description: 'Crates.io publish token',
    dashboard: 'https://crates.io/settings/tokens',
  },
});
