import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LAUNCHDARKLY_SDK_KEY: {
    description: 'LaunchDarkly server-side SDK key',
    dashboard: 'https://app.launchdarkly.com/settings/projects',
  },
  LD_SDK_KEY: {
    description:
      'Alias for LAUNCHDARKLY_SDK_KEY. LaunchDarkly server-side SDK key used in some SDKs (React Universal, Node.js)',
    dashboard: 'https://app.launchdarkly.com/settings/projects',
    required: false,
  },
});
