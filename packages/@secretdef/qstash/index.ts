import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QSTASH_TOKEN: { description: 'Upstash QStash token',
    dashboard: 'https://console.upstash.com/qstash' },
  QSTASH_CURRENT_SIGNING_KEY: { description: 'QStash current signing key',
    dashboard: 'https://console.upstash.com/qstash', required: false },
  QSTASH_NEXT_SIGNING_KEY: { description: 'QStash next signing key for key rotation',
    dashboard: 'https://console.upstash.com/qstash', required: false },
});
