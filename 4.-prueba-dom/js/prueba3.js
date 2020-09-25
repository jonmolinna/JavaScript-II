/***** Eventos del Teclado *****/
export function shortcuts(e){
    //console.log(e.type);
    //console.log(e.key);
    //console.log(e.keyCode);
    //console.log(`ctrl: ${e.ctrlKey}`)
    //console.log(`alt: ${e.altKey}`)
    //console.log(`shift: ${e.shiftKey}`)
    //console.log(e);

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado")
    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado")
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado")
    }
}

let x = 0;
let y = 0;

export function moveBall(e, ball, stage){
    const $ball = document.querySelector(ball);
    const $stage = document.querySelector(stage);
    const limitsBall = $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();

    switch (e.keyCode){
        case 37:
            if(limitsBall.left > limitsStage.left){
                x--;
                e.preventDefault();
            } 
            break;
        case 38:
            if(limitsBall.top > limitsStage.top){
                e.preventDefault();
                y--;
            } 
            break;
        case 39:
            if(limitsBall.right < limitsStage.right){
                e.preventDefault();
                x++;
            } 
            break;
        case 40:
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++;
            } 
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}