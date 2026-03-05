import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VIRUSTOTAL_API_KEY: {
    description: 'VirusTotal API key',
    dashboard: 'https://www.virustotal.com/gui/home/upload',
  },
});
