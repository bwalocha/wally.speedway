export default class Clock {
    constructor() {
        this._status = "STOPPED";
        this._startTimestamp = 0;
    }
    GetTimestamp() {
        return this._status == "STARTED" ? Date.now() - this._startTimestamp : 0;
    }
    Start() {
        this._startTimestamp = Date.now();
        this._status = "STARTED";
    }
}
