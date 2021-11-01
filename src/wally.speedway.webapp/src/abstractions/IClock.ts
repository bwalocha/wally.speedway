import IDynamicSprite from "./IDynamicSprite";

export default interface IClock {
    GetTimestamp: () => number;

    Start(): void;

    GetDelta(dynamicSprite: IDynamicSprite): number;
}