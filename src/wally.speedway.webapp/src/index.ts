import Game from "./services/Game";

window.onload = () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw(ctx);

    const game = new Game(ctx);
    game.Start();

    console.info('Window Loaded', ctx);
}

const track = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, radius: number) => {
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
    ctx.stroke();
}

const line = (ctx: CanvasRenderingContext2D, x0:number, y0:number, x1:number, y1:number) =>
{
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, 600, 600);

    line(ctx, 100, 100, 600, 600);

    track(ctx, 100, 100 - 50, 500, 250, 38 * Math.PI);

    track(ctx, 0, 0, 700, 350, 54 * Math.PI);

    line(ctx, 350, 300, 350, 350);
}