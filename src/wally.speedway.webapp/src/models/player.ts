import Vehicle from "./vehicle";
import IClock from "../abstractions/IClock";
import { Location } from "../services/Location";
import IDynamicSprite from "../abstractions/IDynamicSprite";
import Guid from "../services/Guid";

export class Player implements IDynamicSprite {
    private readonly _name: string;
    private readonly _vehicle: Vehicle;
    private _style: string;
    private _key: string = Guid.NewGuid();

    constructor(name: string, location: Location, style: string) {
        this._name = name;
        this._vehicle = new Vehicle(location, style);
        this._style = style;
    }

    public get Name() {
        return this._name;
    }

    public Update(clock: IClock): void {
        this._vehicle.Update(clock);
    }

    Draw(ctx: CanvasRenderingContext2D): void {
        this._vehicle.Draw(ctx);
    }

    get Key(): string {
        return this._key;
    }

    public GetData(): any {
        return this._vehicle.GetData();
    }
}