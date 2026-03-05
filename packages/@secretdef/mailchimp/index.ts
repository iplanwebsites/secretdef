import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  MAILCHIMP_API_KEY: {
    description: "Mailchimp API key for authenticating requests",
    dashboard: "https://mailchimp.com/account/api/",
  },
  MAILCHIMP_SERVER_PREFIX: {
    description: "Mailchimp server prefix (e.g., us1, us2)",
    dashboard: "https://mailchimp.com/account/api/",
    required: false,
  },
  MAILCHIMP_AUDIENCE_ID: {
    description: "Mailchimp audience ID for mailing list operations",
    dashboard: "https://mailchimp.com/account/audience/",
    required: false,
  },
});
