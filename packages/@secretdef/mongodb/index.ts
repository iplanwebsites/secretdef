import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MONGODB_URI: {
    description: 'MongoDB connection string',
    dashboard: 'https://cloud.mongodb.com/',
    validate: 'url',
  },
  MONGO_URL: {
    description: 'MongoDB connection string (alternative to MONGODB_URI)',
    dashboard: 'https://cloud.mongodb.com/',
    required: false,
    validate: 'url',
  },
});
