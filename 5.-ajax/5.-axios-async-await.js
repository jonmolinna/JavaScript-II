(() => {
    const $axiosAsync = document.getElementById("axios-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            let json = await res.data;
            //console.log(res, json)
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
        } catch (err) {
            console.log("Error: ", err.response);
            let message = err.response.statusText || "Ocurrio un Error";
            $axiosAsync.innerHTML = `Error ${err.response.status} : ${message}`;
        } finally {
            console.log("Esto se ejecuta independientemente del try...catch");
        }
    }
    getData();
})();