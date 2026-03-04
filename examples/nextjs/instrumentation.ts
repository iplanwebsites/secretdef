import { validateSecrets } from 'secretdef';
import { secrets } from './secrets.js';

export function register() {
  validateSecrets(secrets);
}
