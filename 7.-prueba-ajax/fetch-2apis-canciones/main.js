const $form = document.getElementById("song-search");
const $loader = document.querySelector(".loader");
const $error = document.querySelector(".error");
const $main = document.querySelector("main");
const $artist = document.querySelector(".artist");
const $song = document.querySelector(".song");

$form.addEventListener("submit", async e => {
    e.preventDefault();

    try {
        $loader.style.display = "block";

        let artist = e.target.artist.value.toLowerCase();
        let song = e.target.song.value.toLowerCase();
        let $artistTemplate = "";
        let $songTemplate = "";
        let artistAPI = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
        let songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        let artistFetch = fetch(artistAPI);
        let songFetch = fetch(songAPI);

        [artistRes, songRest] = await Promise.all([artistFetch, songFetch]);
        
        let artistData = await artistRes.json();
        let songData = await songRest.json();

        //console.log(artistRes, songRest);
        console.log(artistData, songData);

        if(artistData.artist === null){
            $artistTemplate = `<h2>No existe el interprete <mark>${artist}</mark></h2>`;
        } else {
            let artist = artistData.artists[0]
            $artistTemplate = `
                <h2>${artist.strArtist}</h2>
                <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
                <p>${artist.intBornYear} - ${(artist.intDiedYear || "Present")}</p>
                <p>${artist.strCountry}</p>
                <p>${artist.strGenre} - ${artist.strStyle}</p>
                <a href="http://${artist.strWebsite}" target="_blank">Sitio Web</a>
                <p>${artist.strBiographyEN}</p>
            `;
        }

        if(songData.error){
            $songTemplate = `<h2>No existe la cancion <mark>${song}</mark></h2>`;
        } else {
            $songTemplate = `
                <h2>${song.toUpperCase()}</h2>
                <blockquote>${songData.lyrics}</blockquote>
            `;
        }

        $loader.style.display = "none";
        $artist.innerHTML = $artistTemplate;
        $song.innerHTML = $songTemplate;


    } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrio un Error";
        $error.innerHTML = `<p>Error ${err.status} : ${message}</p>`;
        $loader.style.display = "none";
    }
});