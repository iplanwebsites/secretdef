import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SUPABASE_URL: {
    description: 'Supabase project URL',
    dashboard: 'https://supabase.com/dashboard/project/_/settings/api',
  },
  SUPABASE_ANON_KEY: {
    description: 'Supabase anon/public key',
    dashboard: 'https://supabase.com/dashboard/project/_/settings/api',
  },
  SUPABASE_SERVICE_ROLE_KEY: {
    description: 'Supabase service role key',
    dashboard: 'https://supabase.com/dashboard/project/_/settings/api',
  },
});
