import {Player} from "../models/player";
import IClock from "../abstractions/IClock";
import Clock from "./../services/Clock";

export default class Game {
    private _players: Player[] = [];
    private _clock: Clock = new Clock();

    constructor() {
        this._players = [
            new Player("A", { x: 100, y: 100 }),
            new Player("B", { x: 100, y: 150 }),
            new Player("C", { x: 100, y: 200 }),
            new Player("D", { x: 100, y: 250 }),
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
    }
}