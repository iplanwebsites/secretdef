import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEGMENT_WRITE_KEY: {
    description: 'Segment write key — https://app.segment.com',
  },
});
