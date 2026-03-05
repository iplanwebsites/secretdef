import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPOTIFY_CLIENT_ID: { description: 'Spotify app client ID',
    dashboard: 'https://developer.spotify.com/dashboard' },
  SPOTIFY_CLIENT_SECRET: { description: 'Spotify app client secret',
    dashboard: 'https://developer.spotify.com/dashboard' },
  SPOTIFY_REDIRECT_URI: { description: 'OAuth redirect URI',
    dashboard: 'https://developer.spotify.com/dashboard', required: false },
});
