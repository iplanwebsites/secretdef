import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAVEN_USERNAME: {
    description: 'Maven Central username',
    dashboard: 'https://central.sonatype.com',
  },
  MAVEN_PASSWORD: {
    description: 'Maven Central password/token',
    dashboard: 'https://central.sonatype.com',
  },
  MAVEN_GPG_PASSPHRASE: {
    description: 'GPG passphrase for Maven signing',
    dashboard: 'https://central.sonatype.com',
    required: false,
  },
});
