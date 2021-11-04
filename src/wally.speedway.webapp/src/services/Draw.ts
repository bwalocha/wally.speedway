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

    public static Elipsis(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, radius: number, style?: string) {
        ctx.beginPath();
        ctx.moveTo(x,y+radius);
        ctx.lineTo(x,y+h-radius);
        ctx.arcTo(x,y+h,x+radius,y+h,radius);
        ctx.lineTo(x+w-radius,y+h);
        ctx.arcTo(x+w,y+h,x+w,y+h-radius,radius);
        ctx.lineTo(x+w,y+radius);
        ctx.arcTo(x+w,y,x+w-radius,y,radius);
        ctx.lineTo(x+radius,y);
        ctx.arcTo(x,y,x,y+radius,radius);
        if (style) {
            ctx.fillStyle = style;
            ctx.fill();
        }
        ctx.stroke();
    }
}
