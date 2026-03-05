import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NUGET_API_KEY: {
    description: 'NuGet publish API key',
    dashboard: 'https://www.nuget.org/account/apikeys',
  },
});
