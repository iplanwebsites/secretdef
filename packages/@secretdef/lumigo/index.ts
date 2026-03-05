import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LUMIGO_TRACER_TOKEN: {
    description: 'Lumigo tracer token',
    dashboard: 'https://app.lumigo.io',
  },
});
