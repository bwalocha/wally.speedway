import Game from "./services/Game";
// const track = new Track();
// console.info('Wally.Speedway', track);
const game = new Game();
window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(ctx);
    game.Start();
    window.requestAnimationFrame(() => draw(ctx));
    console.info('Window Loaded', ctx);
};
const track = (ctx, x, y, w, h, radius) => {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + h - radius);
    ctx.arcTo(x, y + h, x + radius, y + h, radius);
    ctx.lineTo(x + w - radius, y + h);
    ctx.arcTo(x + w, y + h, x + w, y + h - radius, radius);
    ctx.lineTo(x + w, y + radius);
    ctx.arcTo(x + w, y, x + w - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
};
const line = (ctx, x0, y0, x1, y1) => {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
};
const draw = (ctx) => {
    line(ctx, 100, 100, 600, 600);
    track(ctx, 100, 100 - 50, 500, 250, 38 * Math.PI);
    track(ctx, 0, 0, 700, 350, 54 * Math.PI);
    line(ctx, 350, 300, 350, 350);
    game.Draw(ctx);
};
