import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AGILITY_GUID: {
    description: 'Agility CMS GUID',
    dashboard: 'https://manager.agilitycms.com',
  },
  AGILITY_API_FETCH_KEY: {
    description: 'Agility CMS fetch API key',
    dashboard: 'https://manager.agilitycms.com',
  },
  AGILITY_API_PREVIEW_KEY: {
    description: 'Agility CMS preview API key',
    dashboard: 'https://manager.agilitycms.com',
    required: false,
  },
});
