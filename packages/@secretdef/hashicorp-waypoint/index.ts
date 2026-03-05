import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WAYPOINT_TOKEN: {
    description: 'Waypoint auth token',
    dashboard: 'https://www.waypointproject.io',
  },
  WAYPOINT_SERVER_ADDR: {
    description: 'Waypoint server address',
    dashboard: 'https://www.waypointproject.io',
    required: false,
  },
});
