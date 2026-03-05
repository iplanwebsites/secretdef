import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEATHERAPI_KEY: {
    description: 'WeatherAPI key',
    dashboard: 'https://www.weatherapi.com/my/',
  },
});
