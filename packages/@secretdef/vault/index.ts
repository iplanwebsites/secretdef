import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VAULT_ADDR: {
    description: 'HashiCorp Vault server address',
    dashboard: 'https://developer.hashicorp.com/vault/docs',
    validate: 'url',
  },
  VAULT_TOKEN: {
    description: 'HashiCorp Vault authentication token',
    dashboard: 'https://developer.hashicorp.com/vault/docs/concepts/tokens',
  },
  VAULT_NAMESPACE: {
    description: 'HashiCorp Vault namespace',
    dashboard: 'https://developer.hashicorp.com/vault/docs/enterprise/namespaces',
    required: false,
  },
});
