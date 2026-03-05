import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NEO4J_URI: {
    description: 'Neo4j connection URI',
    dashboard: 'https://console.neo4j.io',
  },
  NEO4J_USERNAME: {
    description: 'Neo4j username',
    dashboard: 'https://console.neo4j.io',
  },
  NEO4J_PASSWORD: {
    description: 'Neo4j password',
    dashboard: 'https://console.neo4j.io',
  },
  NEO4J_DATABASE: {
    description: 'Neo4j database name',
    dashboard: 'https://console.neo4j.io',
    required: false,
  },
});
