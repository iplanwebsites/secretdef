import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MERCADOPAGO_ACCESS_TOKEN: {
    description: 'Mercado Pago access token',
    dashboard: 'https://www.mercadopago.com/developers',
  },
});
