import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TURNSTILE_SECRET_KEY: { description: 'Cloudflare Turnstile secret key',
    dashboard: 'https://dash.cloudflare.com/?to=/:account/turnstile' },
  TURNSTILE_SITE_KEY: { description: 'Cloudflare Turnstile site key',
    dashboard: 'https://dash.cloudflare.com/?to=/:account/turnstile', required: false },
});
