import IClock from "./../abstractions/IClock";

export default class Clock implements IClock {
    private _status: "STARTED" | "STOPPED" = "STOPPED";
    private _startTimestamp: number = 0;

    public GetTimestamp(): number {
        return this._status == "STARTED" ? Date.now() - this._startTimestamp : 0;
    }

    public Start(): void {
        this._startTimestamp = Date.now();
        this._status = "STARTED";
    }
}
