import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LANGSMITH_API_KEY: {
    description: 'LangSmith API key',
    dashboard: 'https://smith.langchain.com/settings',
  },
  LANGCHAIN_PROJECT: {
    description: 'LangChain project name',
    dashboard: 'https://smith.langchain.com',
    required: false,
  },
});
