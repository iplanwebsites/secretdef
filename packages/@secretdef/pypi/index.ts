import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PYPI_API_TOKEN: {
    description: 'PyPI API token',
    dashboard: 'https://pypi.org/manage/account/#api-tokens',
  },
});
