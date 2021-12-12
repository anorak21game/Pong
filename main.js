"use strict";

import { Playground } from "../class/Playground.js";

const root = document.querySelector('#root');
const playground = new Playground(root);

playground.aspectRatio(12, 9);

/* Test */
let test = document.createElement('div');
test.classList.add('test');
playground.screen.append(test);