import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LT_USERNAME: {
    description: 'LambdaTest username',
    dashboard: 'https://accounts.lambdatest.com/detail/profile',
  },
  LT_ACCESS_KEY: {
    description: 'LambdaTest access key',
    dashboard: 'https://accounts.lambdatest.com/detail/profile',
  },
});
