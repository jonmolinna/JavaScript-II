/***** Sorteo *****/
export default function draw(btn, selector){
    const getWinner = (selector) => {
        const $players = document.querySelectorAll(selector);
        const random = Math.floor(Math.random() * $players.length);
        const winner = $players[random];
        //console.log($players,random, winner);
        return `El ganador es: ${winner.textContent}`;
    }

    document.addEventListener("click", e => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            //console.log(result);
        }
    });
}

// Comments Youtube
const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];
    return `El ganador es: ${winner.textContent}`;
}

//getWinnerComment("ytd-comment-thread-renderer #authortext span");