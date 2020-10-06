/***** Scroll Espia *****/
export default function scrollSpy(){
    const $sections = document.querySelectorAll("section[data-scroll-spy]")
    const cb = (entries) => {
        //console.log("entries: ", entries)

        entries.forEach(entry => {
            //console.log("Entry: ", entry)
            const id = entry.target.getAttribute("id");
            //console.log(id)
            if(entry.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            } else {
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
    };

    const observer = new IntersectionObserver(cb, {
        //root
        //rootMargin: "-250px"
        threshold: [0.5, 0.75] //1
    });
    //console.log("observer: ", observer);

    $sections.forEach(element => observer.observe(element));
}