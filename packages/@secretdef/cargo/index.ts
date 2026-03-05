import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CARGO_REGISTRY_TOKEN: {
    description: 'Cargo alternate registry token',
    dashboard: 'https://doc.rust-lang.org/cargo/',
  },
});
