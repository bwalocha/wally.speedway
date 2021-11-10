import {Player} from "../models/player";
import Track from "./../models/track";
import IClock from "../abstractions/IClock";
import Clock from "./../services/Clock";

export default class Game {
    private _players: Player[] = [];
    private _clock: Clock = new Clock();
    private _track: Track = new Track();
    private readonly _ctx: CanvasRenderingContext2D;
    private readonly _collisionCtx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D, collisionCtx: CanvasRenderingContext2D) {
        this._ctx = ctx;
        this._collisionCtx = collisionCtx;
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
        this.Draw(0);
        this._track.Draw(this._collisionCtx);
    }

    public StartTurn(playerIndex: number): void {
        this._players[playerIndex].StartTurn(this._clock);
    }

    public EndTurn(playerIndex: number): void {
        this._players[playerIndex].EndTurn(this._clock);
    }

    private Update(): void {
        this._players.forEach(a => a.Update(this._clock));
        this._players.forEach(a => {
            const pixel = this._collisionCtx.getImageData(Math.floor(a.Vehicle.Location.x), Math.floor(a.Vehicle.Location.y), 1, 1);
            console.log(a.Vehicle.GetData());
            if (pixel.data[0] != 16 && pixel.data[0] != 8 && pixel.data[0] != 0 || pixel.data[1] != 0 || pixel.data[2] != 0 /*|| pixel.data[3] != 0*/) {
                a.Vehicle.SetCollision();
            }
        })
    }

    private Draw(timestamp: number) {
        this.Update();
        this._track.Draw(this._ctx);
        this._players.forEach(a => a.Draw(this._ctx));
        this._clock.Next();
        requestAnimationFrame(this.Draw.bind(this));
    }
}