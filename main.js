"use strict";

// var vm = require("vm");
// var fs = require("fs");

// var data = fs.readFileSync('./file.js');
// const script = new vm.Script(data);
// script.runInThisContext();

import { Screen } from "../class/Screen.js";

const root = document.querySelector('#root');
const screen = new Screen(root);