import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WANDB_API_KEY: {
    description: 'W&B API key',
    dashboard: 'https://wandb.ai/authorize',
  },
  WANDB_PROJECT: {
    description: 'W&B project name',
    dashboard: 'https://wandb.ai',
    required: false,
  },
  WANDB_ENTITY: {
    description: 'W&B entity (user or team)',
    dashboard: 'https://wandb.ai',
    required: false,
  },
});
