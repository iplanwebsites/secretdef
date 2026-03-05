import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOOPS_API_KEY: { description: 'Loops API key',
    dashboard: 'https://app.loops.so/settings/api' },
});
