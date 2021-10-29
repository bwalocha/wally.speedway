import { Player } from "../models/player";
import Clock from "./../services/Clock";
export default class Game {
    constructor() {
        this._players = [];
        this._clock = new Clock();
        this._players = [
            new Player("A"),
            new Player("B"),
            new Player("C"),
            new Player("D")
        ];
    }
    get Clock() {
        return this._clock;
    }
    Start() {
        this._clock.Start();
    }
    Update() {
        this._players.forEach(a => a.Update(this._clock));
    }
    Draw(ctx) {
        ctx.fillText(`[${this._clock.GetTimestamp()}]`, 100, 200);
    }
}
