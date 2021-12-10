"use strict";

const fs = require('fs');
let data = fs.readFileSync('test.txt');
console.log(data.toString());

// import { Screen } from "../class/Screen.js";

// const root = document.querySelector('#root');
// const screen = new Screen(root);
