import { validateSecrets } from 'secretdef';
import { secrets } from './secrets';

export function register() {
  validateSecrets(secrets);
}
