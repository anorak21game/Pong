/* IMPORT CLASSES */ 
import { Screen } from "../class/Screen.js";
import { Playground } from "../class/Playground.js";
import { Ball } from "../class/Ball.js";
import { Paddle } from "../class/Paddle.js";

/* SCREEN */
const SCREEN = new Screen(window.document.body);
SCREEN.init();

/* PLAYGROUND */
const PLAYGROUND = new Playground(SCREEN.element);
PLAYGROUND.init();
