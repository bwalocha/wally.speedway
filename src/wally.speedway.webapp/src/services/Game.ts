import {Player} from "../models/player";
import IClock from "../abstractions/IClock";
import Clock from "./../services/Clock";

export default class Game {
    private _players: Player[] = [];
    private _clock: Clock = new Clock();

    constructor() {
        this._players = [
            new Player("A", { x: 340, y: 310 }, "#FF0000"),
            new Player("B", { x: 340, y: 320 }, "#00FF00"),
            new Player("C", { x: 340, y: 330 }, "#0000FF"),
            new Player("D", { x: 340, y: 340 }, "#AAAAAA"),
        ];
    }

    public get Clock(): IClock {
        return this._clock;
    }

    public Start():void {
        this._clock.Start();
    }

    public Update(): void {
        this._players.forEach(a => a.Update(this._clock));
    }

    public Draw(ctx: CanvasRenderingContext2D) {
        ctx.fillText(`[${this._clock.GetTimestamp()}]`, 100, 200);
        this._players.forEach(a => a.Draw(ctx));
    }
}