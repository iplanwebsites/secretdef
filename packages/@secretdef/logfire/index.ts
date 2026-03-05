import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOGFIRE_TOKEN: {
    description: 'Logfire write token',
    dashboard: 'https://logfire.pydantic.dev',
  },
});
