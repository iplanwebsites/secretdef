import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QIANFAN_API_KEY: {
    description: 'Qianfan API key',
    dashboard: 'https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application',
  },
  QIANFAN_SECRET_KEY: {
    description: 'Qianfan secret key',
    dashboard: 'https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application',
  },
});
