import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  LINEAR_API_KEY: {
    description: "API key for Linear",
    dashboard: "https://linear.app/settings/api",
  },
});
