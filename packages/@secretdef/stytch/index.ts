import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  STYTCH_PROJECT_ID: {
    description: 'Stytch Project ID',
    dashboard: 'https://stytch.com/dashboard/api-keys',
    required: true,
  },
  STYTCH_SECRET: {
    description: 'Stytch API Secret',
    dashboard: 'https://stytch.com/dashboard/api-keys',
    required: true,
  },
});
