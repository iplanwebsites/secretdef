import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PINECONE_API_KEY: {
    description: 'Pinecone API key',
    dashboard: 'https://app.pinecone.io/',
  },
  PINECONE_CONTROLLER_HOST: {
    description: 'Pinecone controller host URL',
    dashboard: 'https://app.pinecone.io/',
    required: false,
  },
  PINECONE_DEBUG: {
    description: 'Enable debug logging for Pinecone SDK',
    dashboard: 'https://app.pinecone.io/',
    required: false,
  },
  PINECONE_DEBUG_CURL: {
    description: 'Enable CURL debug logging for Pinecone SDK',
    dashboard: 'https://app.pinecone.io/',
    required: false,
  },
});
