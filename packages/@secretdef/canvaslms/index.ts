import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CANVAS_API_TOKEN: {
    description: 'Canvas LMS access token',
    dashboard: 'https://canvas.instructure.com/profile/settings',
  },
  CANVAS_BASE_URL: {
    description: 'Canvas LMS instance URL',
    dashboard: 'https://canvas.instructure.com',
    validate: 'url',
  },
});
