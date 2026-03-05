import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HEAP_APP_ID: {
    description: 'Heap app ID',
    dashboard: 'https://heapanalytics.com/app/manage/account',
  },
  HEAP_API_KEY: {
    description: 'Heap server-side API key',
    dashboard: 'https://heapanalytics.com/app/manage/account',
    required: false,
  },
});
