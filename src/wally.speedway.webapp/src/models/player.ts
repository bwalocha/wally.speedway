import Vehicle from "./vehicle";
import IClock from "../abstractions/IClock";

export class Player {
    private readonly _name: string;
    private readonly _vehicle: Vehicle;

    constructor(name: string) {
        this._name = name;
        this._vehicle = new Vehicle();
    }

    public get Name() {
        return this._name;
    }

    public Update(clock: IClock): void {
        this._vehicle.Update(clock);
    }
}