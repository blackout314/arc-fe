
import crash from './crash';
import AES_cbc from './aes_cbc.js';
import AES from './aes.js';
import Entries from './entries.js';
import Record from './record.js';
import Notify from './notify.js';
import App from './app.js';

const VERSION = '1.1.11';
const Crash = crash();

console.log('%c LOADED ', 'background: #222; color: #bada55', VERSION);
