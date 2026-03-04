import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SUPABASE_URL: {
    envVar: 'SUPABASE_URL',
    description: 'Supabase project URL — https://supabase.com/dashboard/project/_/settings/api',
  },
  SUPABASE_ANON_KEY: {
    envVar: 'SUPABASE_ANON_KEY',
    description: 'Supabase anon/public key — https://supabase.com/dashboard/project/_/settings/api',
  },
  SUPABASE_SERVICE_ROLE_KEY: {
    envVar: 'SUPABASE_SERVICE_ROLE_KEY',
    description: 'Supabase service role key — https://supabase.com/dashboard/project/_/settings/api',
  },
});
