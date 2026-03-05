import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENWEATHER_API_KEY: {
    description: 'OpenWeatherMap API key',
    dashboard: 'https://home.openweathermap.org/api_keys',
  },
});
