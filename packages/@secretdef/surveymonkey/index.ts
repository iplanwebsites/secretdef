import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SURVEYMONKEY_ACCESS_TOKEN: {
    description: 'SurveyMonkey access token',
    dashboard: 'https://developer.surveymonkey.com/apps/',
  },
});
