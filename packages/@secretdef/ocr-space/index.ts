import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OCR_SPACE_API_KEY: {
    description: 'OCR.space API key',
    dashboard: 'https://ocr.space/ocrapi/freekey',
  },
});
