import IDynamicSprite from "./IDynamicSprite";

export default interface IClock {
    get Timestamp(): number;

    Start(): void;

    GetDelta(dynamicSprite: IDynamicSprite): number;
}