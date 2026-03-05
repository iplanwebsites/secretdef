import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  NOTION_TOKEN: {
    description:
      "Notion API Bearer token for authentication. Can also be passed as NOTION_API_KEY",
    dashboard: "https://www.notion.so/my-integrations",
  },
});
