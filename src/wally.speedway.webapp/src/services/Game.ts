import {Player} from "../models/player";
import IClock from "../abstractions/IClock";
import Clock from "./../services/Clock";

export default class Game {
    private _players: Player[] = [];
    private _clock: Clock = new Clock();
    private readonly _ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx;
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
        this.Draw(1);
    }

    public StartTurn(playerIndex: number): void {
        this._players[playerIndex].StartTurn(this._clock);
    }

    public EndTurn(playerIndex: number): void {
        this._players[playerIndex].EndTurn(this._clock);
    }

    private Update(): void {
        this._players.forEach(a => a.Update(this._clock));
    }

    private Draw(timestamp: number) {
        // console.log(timestamp);
        this.Update();
        this._ctx.fillText(`[${timestamp}]`, 100, 200);
        this._players.forEach(a => a.Draw(this._ctx));
        this._clock.Next();
        requestAnimationFrame(this.Draw.bind(this));
    }
}