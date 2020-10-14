const $table = document.querySelector(".crud-table");
const $form = document.querySelector(".crud-form");
const $title = document.querySelector(".crud-title");
const $template = document.getElementById("crud-template").content;
const $fragment = document.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await fetch("http://localhost:3000/santos");
        let json = await res.json();
        console.log(json)

        if(!res.ok) throw { status: res.status, statusText: res.statusText};

        json.forEach(el => {
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".constellation").textContent = el.constelacion;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".edit").dataset.constellation = el.constelacion;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);

    } catch (err) {
        let message = err.statusText || "Ocurrio un Error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status} : ${message}</b></p>`);
    }
}

document.addEventListener("DOMContentLoaded", getAll);

document.addEventListener("submit", async e => {
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            //Create - POST
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type" : "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                };
                let res = await fetch("http://localhost:3000/santos", options);
                await res.json();
                
                if(!res.ok) throw { status: res.status, statusText: res.statusText};
                location.reload();
                
            } catch (err) {
                let message = err.statusText || "Ocurrio un Error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status} : ${message}</b></p>`); 
            }
        } else {
            //Update - PUT
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type" : "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                };
                let res = await fetch(`http://localhost:3000/santos/${e.target.id.value}`, options);
                await res.json();
                
                if(!res.ok) throw { status: res.status, statusText: res.statusText};
                location.reload();
                
            } catch (err) {
                let message = err.statusText || "Ocurrio un Error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status} : ${message}</b></p>`); 
            }
        }
    }
});

document.addEventListener("click", async e => {
    if(e.target.matches(".edit")){
        $title.textContent = "Editar Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }

    if(e.target.matches(".delete")){
        let isDelete = confirm(`¿Estas seguro de eliminar el id ${e.target.dataset.id}?`);

        if(isDelete){
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type" : "application/json; charset=utf-8"
                    }
                };
                let res = await fetch(`http://localhost:3000/santos/${e.target.dataset.id}`, options);
                await res.json();
                
                if(!res.ok) throw { status: res.status, statusText: res.statusText};
                location.reload();
                
            } catch (err) {
                let message = err.statusText || "Ocurrio un Error";
                alert(`Error ${err.status} : ${message}`); 
            }
        }
    }

});