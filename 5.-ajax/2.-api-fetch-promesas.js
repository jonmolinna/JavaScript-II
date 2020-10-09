(() => {
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then( res => {
            // Convertimos a JSON
            //console.log(res);
            return res.ok? res.json() : Promise.reject(res); // En caso que sea falso ejecuta el catch
        })
        .then(json => {
            //console.log(json)
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);
        })
        .catch(err => {
            //console.log(err)
            let message = xhr.statusText || "Ocurrio un Error";
            $fetch.innerHTML = `Error ${err.status} : ${message}`;
        })
        .finally(() => console.log('Esto se ejecutara independientemente del resultado de la promesa fetch'));
})();