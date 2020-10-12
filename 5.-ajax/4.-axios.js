(() => {
    const $axios = document.getElementById("axios");
    const $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        //console.log(res)
        let json = res.data;
        json.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch(err => {
        //console.log("Error: ", err.response);
        let message = err.response.statusText || "Ocurrio un Error";
        $axios.innerHTML = `Error ${err.response.status} : ${message}`;
    })
    .finally(() => {
        console.log("Esto se ejecuta independientemente");
    });
})();