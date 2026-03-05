import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TYPEFORM_PERSONAL_TOKEN: {
    description: 'Typeform personal access token',
    dashboard: 'https://admin.typeform.com/account/tokens',
  },
});
