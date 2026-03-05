import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEGMENT_WRITE_KEY: { description: 'Segment source write key',
    dashboard: 'https://app.segment.com/' },
});
