import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHROMA_SERVER_HOST: { description: 'Chroma server host',
    dashboard: 'https://docs.trychroma.com/' },
  CHROMA_SERVER_AUTH_CREDENTIALS: { description: 'Chroma server auth credentials',
    dashboard: 'https://docs.trychroma.com/', required: false },
});
