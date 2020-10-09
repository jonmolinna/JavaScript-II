// Funcion anonima auto ejecutable
(() => {
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById("xhr");
    const $fragment = document.createDocumentFragment();
    
    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return
        //console.log(xhr);
        if(xhr.status >= 200 && xhr.status < 300){
            //console.log('Exito')
            //console.log(xhr.responseText)
            let json = JSON.parse(xhr.responseText);
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);

        } else {
            //console.log('Error')
            let message = xhr.statusText || "Ocurrio un Error";
            $xhr.innerHTML = `Error ${xhr.status} : ${message}`;
        }
        
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
})();