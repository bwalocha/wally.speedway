import IDynamicSprite from "./IDynamicSprite";
import IClock from "./IClock";

export default interface IVehicle extends IDynamicSprite {
    StartTurn(clock: IClock): void;

    EndTurn(clock: IClock): void;
}