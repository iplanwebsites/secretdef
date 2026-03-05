import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AGORA_APP_ID: { description: 'Agora app ID',
    dashboard: 'https://console.agora.io/' },
  AGORA_APP_CERTIFICATE: { description: 'Agora app certificate',
    dashboard: 'https://console.agora.io/' },
});
