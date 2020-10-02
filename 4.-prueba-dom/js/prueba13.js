/***** Filtros de Búsqueda *****/
export default function searchFilters(input, selector){
    document.addEventListener("keyup", e => {
        if(e.target.matches(input)){
            //console.log(e.key)
            if(e.key === "Escape") e.target.value = "";

            document.querySelectorAll(selector).forEach(elemt => 
                elemt.textContent.toLowerCase().includes(e.target.value) ? // Validando tru o false
                elemt.classList.remove("filter"): elemt.classList.add("filter")
            )
        }
    })
};