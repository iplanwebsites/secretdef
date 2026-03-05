import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ASSEMBLYAI_API_KEY: {
    description: 'AssemblyAI API key',
    dashboard: 'https://www.assemblyai.com/app/account',
  },
});
