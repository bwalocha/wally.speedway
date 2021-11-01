import IClock from "./../abstractions/IClock";
import IDynamicSprite from "../abstractions/IDynamicSprite";

type Dictionary<T> = { [key: string]: T };

export default class Clock implements IClock {
    private _status: "STARTED" | "STOPPED" = "STOPPED";
    private _startTimestamp: number = 0;
    private _timers: Dictionary<number> = {};

    public GetTimestamp(): number {
        return this._status == "STARTED" ? Date.now() - this._startTimestamp : 0;
    }

    public Start(): void {
        this._startTimestamp = Date.now();
        this._status = "STARTED";
    }

    public GetDelta(dynamicSprite: IDynamicSprite): number {
        const lastDate = this._timers[dynamicSprite.Key];
        this._timers[dynamicSprite.Key] = this.GetTimestamp();
        return this._timers[dynamicSprite.Key] - lastDate;
    }
}
