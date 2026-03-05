import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LIVEKIT_URL: { description: 'LiveKit server URL',
    dashboard: 'https://cloud.livekit.io/', validate: 'url' },
  LIVEKIT_API_KEY: { description: 'LiveKit API key',
    dashboard: 'https://cloud.livekit.io/' },
  LIVEKIT_API_SECRET: { description: 'LiveKit API secret',
    dashboard: 'https://cloud.livekit.io/' },
});
