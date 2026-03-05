import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  MAPBOX_ACCESS_TOKEN: {
    description: "Mapbox access token for API authentication",
    dashboard: "https://account.mapbox.com/access-tokens/",
  },
});
