import ISprite from "./../abstractions/ISprite";
import Draw from "../services/Draw";

export default class Track implements ISprite {

    constructor() {
        console.log('Create Track');
    }

    public Draw(ctx: CanvasRenderingContext2D): void {
        Draw.Elipsis(ctx, 0, 0, 700, 350, 54 * Math.PI, "#000000");
        Draw.Elipsis(ctx, 100, 100 - 50, 500, 250, 38 * Math.PI, "#444444");

        Draw.Line(ctx, 350, 300, 350, 350);
    }
}