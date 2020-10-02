/***** Geolocalizacion *****/
export default function getGeolocation(id){
    const $id = document.getElementById(id);
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    const success = position => {
        //console.log(position);
        let coords = position.coords;
        $id.innerHTML = `
            <p>Tu posicion actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precision: <b>${coords.accuracy}</b>metros</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 10z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    };
    const error = err => {
        $id.innerHTML = `<p><mark>${err.code} : ${err.message}</mark></p>`
        console.log(`Error ${err.code} : ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
}