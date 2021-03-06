import IClock from "../abstractions/IClock";
import IVehicle from "../abstractions/IVehicle";
import Guid from "../services/Guid";
import { Location } from "../services/Location";
import Draw from "../services/Draw";

export default class Vehicle implements IVehicle {
    private _key = Guid.NewGuid();
    private _style: string;
    private _isTurning: boolean = false;
    public get Key() {
        return this._key;
    }

    private _location: Location;
    // private _velocity: number = 0;
    private _speed: number = 0.1;
    private _headingAngle: number = 0;
    private _steerAngle: number = Math.PI / 180 * 0;
    private _wheelBaseLength: number = 10;

    constructor(location: Location, style: string) {
        this._location = location;
        this._style = style;
    }

    public get Location() {
        return this._location;
    }

    public StartTurn(clock: IClock): void {
        if (this._isTurning) {
            return;
        }

        this._isTurning = true;
        this._steerAngle += Math.PI / 180 * -1;
    }

    public EndTurn(clock: IClock): void {
        this._isTurning = false;
    }

    public SetCollision(): void {
        this._location = { x: 0, y: 0 };
    }

    public Update(clock: IClock): void {
        // console.log(this)
        // this._location.x+=1;
        // console.log(this);
        const d = this.getNextFrameLocation(clock.Timestamp);
        this._location = {
            x: this._location.x + d.x,
            y: this._location.y + d.y,
        };

        if (this._isTurning){
            this._steerAngle += Math.PI / 180 * -1;
        }
    }

    Draw(ctx: CanvasRenderingContext2D): void {
        // console.log(this);
        Draw.Line(ctx,
            this._location.x,
            this._location.y,
            this._location.x + this._wheelBaseLength,
            this._location.y, this._style);
    }

    private getFrontWheelLocation(): Location {
        const dx = this._wheelBaseLength / 2 * Math.cos(this._headingAngle);
        const dy = this._wheelBaseLength / 2 * Math.sin(this._headingAngle);
        return {
            x: this._location.x + dx,
            y: this._location.y + dy
        };
    }

    private getBackWheelLocation(): Location {
        const dx = this._wheelBaseLength / 2 * Math.cos(this._headingAngle);
        const dy = this._wheelBaseLength / 2 * Math.sin(this._headingAngle);
        return {
            x: this._location.x - dx,
            y: this._location.y - dy
        };
    }

    private getNextFrameFrontWheelLocation(dt: number): Location {
        return {
            x: this._speed * dt * Math.cos(this._headingAngle + this._steerAngle),
            y: this._speed * dt * Math.sin(this._headingAngle + this._steerAngle)
        }
    }

    private getNextFrameBackWheelLocation(dt: number): Location {
        return {
            x: this._speed * dt * Math.cos(this._headingAngle),
            y: this._speed * dt * Math.sin(this._headingAngle)
        }
    }

    private getNextFrameLocation(dt: number): Location {
        const nextFrameFrontWheelLocation = this.getNextFrameFrontWheelLocation(dt);
        const nextFrameBackWheelLocation = this.getNextFrameBackWheelLocation(dt);

        return {
            x: (nextFrameFrontWheelLocation.x + nextFrameBackWheelLocation.x)  / 2,
            y: (nextFrameFrontWheelLocation.y + nextFrameBackWheelLocation.y)  / 2
        }
    }

    private getNextFrameHeadingAngle(dt: number): number {
        const nextFrameFrontWheelLocation = this.getNextFrameFrontWheelLocation(dt);
        const nextFrameBackWheelLocation = this.getNextFrameBackWheelLocation(dt);

        return Math.atan2(nextFrameFrontWheelLocation.y - nextFrameBackWheelLocation.y,
            nextFrameFrontWheelLocation.x - nextFrameBackWheelLocation.x);
    }
    
    public GetData(): any {
        return {
            location: this._location,
            speed: this._speed,
            headingAngle: this._headingAngle,
            steerAngle: this._steerAngle,
            wheelBaseLength: this._wheelBaseLength,
        }
    }
}