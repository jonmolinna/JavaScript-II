const $main = document.querySelector("main");
const $links = document.querySelector(".links");
let pokeAPI = "https://pokeapi.co/api/v2/pokemon";

async function loadPokemons(url){
    try {
        $main.innerHTML = `<img class="loader" src="loader.svg" alt="Cargando...">`;
        let res = await fetch(url);
        let json = await res.json();
        let $template = "";
        let $prevLink;
        let $nextLink;

        console.log(json)
        if(!res.ok) throw {status: res.estatus, statusText: res.statusText}

        for(let i=0; i<json.results.length; i++){
            //console.log(json.results[i]);
            try {
                let res = await fetch(json.results[i].url);
                let pokemon = await res.json();
                //console.log(res, pokemon)
                if(!res.ok) throw {status: res.estatus, statusText: res.statusText}

                $template += `
                    <figure>
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                        <figcaption>${pokemon.name}</figcaption>
                    </figure>
                `;

            } catch (err) {
                //console.log(err);
                let message = err.statusText || "Ocurrio un Error";
                $template += `
                    <figure>
                        <figcaption>Error ${err.status} : ${message}</figcaption>
                    </figure>
                `;
            }
        }

        $main.innerHTML = $template;

        $prevLink = json.previous ? `<a href="${json.previous}">⏮️</a>` : "";
        $nextLink = json.next ? `<a href="${json.next}">⏭️</a>` : "";
        $links.innerHTML = $prevLink +" "+ $nextLink;

    } catch (err) {
        //console.log(err)
        let message = err.statusText || "Ocurrio un Error";
        $main.innerHTML = `<p>Error ${err.status} : ${message}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", e => loadPokemons(pokeAPI));

document.addEventListener("click", e => {
    if(e.target.matches(".links a")){
        e.preventDefault();
        loadPokemons(e.target.getAttribute("href"));
    }
})