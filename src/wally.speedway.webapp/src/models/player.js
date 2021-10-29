import Vehicle from "./vehicle";
export class Player {
    constructor(name) {
        this._name = name;
        this._vehicle = new Vehicle();
    }
    get Name() {
        return this._name;
    }
    Update(clock) {
        this._vehicle.Update(clock);
    }
}
