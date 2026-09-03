import './libs/alpine.js';
import { storage } from './storage.js';
import { router } from './routes/router.js';
import { dom } from './dom.js';
window.dom = dom;

storage.default('tasks', []);
storage.default('subjects', []);

router.init();