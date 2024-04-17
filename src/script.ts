import { Game } from "./models/Game.js";
import { Keyboard } from "./models/Keyboard.js";
import { GameFactory } from "./GameFactory.js";


const basicGame: Game = new GameFactory().createBasicGame();
const keyboard: Keyboard = new Keyboard(basicGame);

keyboard.initKeyboard();