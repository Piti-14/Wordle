import { Game } from "./models/Game.js";

export interface IGameFactory {
    createBasicGame(): Game;

    createDifficultGame(): Game;
}