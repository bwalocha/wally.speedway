import IClock from "../abstractions/IClock";

export default class Vehicle {
    private _velocity: number = 0;
    private _angle: number = 0;

    constructor() {
    }

    public Turn(): void {
        this._angle += 0.1;
        this._velocity -= 0.1;
    }

    public Update(clock: IClock): void {

    }
}