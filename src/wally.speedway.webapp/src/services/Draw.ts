export default class Draw {
    public static Line(ctx: CanvasRenderingContext2D, x0:number, y0:number, x1:number, y1:number, style?: string) {
        ctx.beginPath();
        ctx.moveTo(x0,y0);
        ctx.lineTo(x1, y1);
        if (style) {
            ctx.strokeStyle = style;
        }
        ctx.stroke();
    }
}