import Game from "./services/Game";
let game: Game;

window.onkeydown = (e) => {
    switch (e.key){
        case "1": game.StartTurn(0); break;
        case "2": game.StartTurn(1); break;
        case "3": game.StartTurn(2); break;
        case "4": game.StartTurn(3); break;
    }
}

window.onkeyup = (e) => {
    switch (e.key){
        case "1": game.EndTurn(0); break;
        case "2": game.EndTurn(1); break;
        case "3": game.EndTurn(2); break;
        case "4": game.EndTurn(3); break;
    }
}

window.onload = () => {
    // world canvas
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // collision canvas
    const collisionCanvas = document.getElementById("collisionCanvas") as HTMLCanvasElement;
    const collisionCtx = collisionCanvas.getContext("2d")!;

    collisionCanvas.width = window.innerWidth;
    collisionCanvas.height = window.innerHeight;

    // init game
    game = new Game(ctx, collisionCtx);
    game.Start();

    console.info('Window Loaded', ctx);
}
