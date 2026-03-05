import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ACCUWEATHER_API_KEY: {
    description: 'AccuWeather API key',
    dashboard: 'https://developer.accuweather.com',
  },
});
