"use strict";

import { Screen } from "../class/Screen.js";

const root = document.querySelector('#root');
const screen = new Screen(root);

screen.aspectRatio(12, 9);

/* Test */
let test = document.createElement('div');
test.classList.add('test');
screen.format.append(test);