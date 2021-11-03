import IClock from "../abstractions/IClock";
import IVehicle from "../abstractions/IVehicle";
import Guid from "../services/Guid";
import { Location } from "../services/Location";
import Draw from "../services/Draw";

export default class Vehicle implements IVehicle {
    private _key = Guid.NewGuid();
    private _style: string;
    public get Key() {
        return this._key;
    }

    private _location: Location;
    // private _velocity: number = 0;
    private _speed: number = 1;
    private _headingAngle: number = 0;
    private _steerAngle: number = 0;
    private _wheelBaseLength: number = 10;

    constructor(location: Location, style: string) {
        this._location = location;
        this._style = style;
    }

    // public Turn(): void {
    //     this._angle += 0.1;
    //     this._velocity -= 0.1;
    // }

    public Update(clock: IClock): void {
        // console.log(this)
        // this._location.x+=1;
        console.log(this);
        this._location = this.getNextFrameLocation(clock.Timestamp);
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

        debugger;

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