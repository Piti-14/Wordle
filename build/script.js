import { Keyboard } from "./models/Keyboard.js";
import { GameFactory } from "./GameFactory.js";
const basicGame = new GameFactory().createBasicGame();
const keyboard = new Keyboard(basicGame);
keyboard.initKeyboard();
