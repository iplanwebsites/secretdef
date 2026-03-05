import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GLITCHTIP_DSN: {
    description: 'GlitchTip DSN',
    dashboard: 'https://glitchtip.com',
  },
});
