/***** Validaciones de Formulario *****/
function contactForm(){
    const $form = document.querySelector(".contact-form");
    const $inputs = document.querySelectorAll(".contact-form [required]");
    //console.log($inputs);
    $inputs.forEach(input => {
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span);
    })

    document.addEventListener("keyup", (e) => {
        if(e.target.matches(".contact-form [required]")){
            let pattern = e.target.pattern || e.target.dataset.pattern;
            //console.log(e.target, pattern);
            // validaciones
            if(pattern && e.target.value !== ""){
                //console.log("El input tiene patron")
                let regex = new RegExp(pattern);
                return !regex.exec(e.target.value)?
                document.getElementById(e.target.name).classList.add("is-active") :
                document.getElementById(e.target.name).classList.remove("is-active")
            }

            if(!pattern){
                //console.log("El input NO tiene patron")
                return e.target.value === ""?
                document.getElementById(e.target.name).classList.add("is-active") :
                document.getElementById(e.target.name).classList.remove("is-active")
            }
        }
    })

    document.addEventListener("submit", e => {
        e.preventDefault();
        const $loader = document.querySelector(".contact-form-loader");
        const $response = document.querySelector(".contact-form-response");
        $loader.classList.remove("none");

        fetch("send-main.php", {
            method: "POST",
            body: new FormData(e.target),
            mode: "cors"
        })
            .then(res => res.ok? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json);
                $loader.classList.add("none");
                $response.classList.remove("none");
                $response.innerHTML = `<p>${json.message}</p>`;
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let message = err.statusText || "Ocurrio un Error al Enviar, intenta nuevamente";
                $response.innerHTML = `<p>Error ${err.status} : ${message}</p>`;
            })
            .finally(() => setTimeout(() => {
                $response.classList.add("none");
                $response.innerHTML = "";
            }, 3000))
    });
}

document.addEventListener("DOMContentLoaded", contactForm)