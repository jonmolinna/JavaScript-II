/***** Tema Claro-Oscuro y LocalStorage *****/
export default function darkTheme(btn, classDark){
    const $themeBtn = document.querySelector(btn);
    const $selectors = document.querySelectorAll("[data-dark]");
    let moon = "🌙";
    let sun = "☀️";

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        localStorage.setItem("theme", "light");
    };

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        localStorage.setItem("theme","dark")
    };

    document.addEventListener("click", e => {
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    document.addEventListener("DOMContentLoaded", e => {
        //console.log(localStorage.getItem("theme"));
        if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "light");
        if(localStorage.getItem("theme") === "light") lightMode();
        if(localStorage.getItem("theme") === "dark") darkMode();
    })
}