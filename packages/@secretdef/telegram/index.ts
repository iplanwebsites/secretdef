import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TELEGRAM_BOT_TOKEN: {
    description: 'Telegram bot token from BotFather',
    dashboard: 'https://t.me/BotFather',
  },
});
