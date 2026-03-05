import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  MAILGUN_API_KEY: {
    description: "Mailgun API key for authenticating requests",
    dashboard: "https://app.mailgun.com/settings/api_security",
  },
  MAILGUN_DOMAIN: {
    description: "Mailgun domain for sending emails",
    dashboard: "https://app.mailgun.com/settings/domains",
  },
  MAILGUN_PUBLIC_KEY: {
    description: "Mailgun public key for client-side operations",
    dashboard: "https://app.mailgun.com/settings/api_security",
    required: false,
  },
});
