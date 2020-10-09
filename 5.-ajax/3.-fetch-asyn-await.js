(() => {
    const $fetchAsync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await res.json();
            //console.log(res,json)
            //if(!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos"); // throw envia el flujo de error al catch
            if(!res.ok) throw {status: res.status, statusText: res.statusText}  

            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } catch (err) {
            console.log("Error:", err)
            let message = xhr.statusText || "Ocurrio un Error";
            $fetchAsync.innerHTML = `Error ${err.status} : ${message}`;
        } finally {
            console.log("Esto se ejecuta independientemente del try...catch");
        }

        
    }

    getData();

})();