import ISprite from "./ISprite";
import IClock from "./IClock";

export default interface IDynamicSprite extends ISprite {
    get Key(): string;
    Update(clock: IClock): void;
}