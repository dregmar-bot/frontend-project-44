#!/usr/bin/env node
import { sayHello, sayBye } from '../src/index.js';
import isEven from '../games/brain-even.js';

const userName = sayHello();
const result = isEven();
sayBye(userName, result);
