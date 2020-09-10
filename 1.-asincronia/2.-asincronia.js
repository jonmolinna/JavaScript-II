// Codigo Sincrono Bloqueante
(() => {
    console.log("Codigo Sincrono");
    console.log("Inicio");

    function dos(){
        console.log("Dos")
    }

    function uno(){
        console.log('Uno')
        dos();
        console.log('Tres')
    }

    uno();
    console.log('fin')

})();

// Codigo Asincrono No Bloqueante
(() => {
    console.log("Codigo Asincrono");
    console.log("Inicio");

    function dos(){
        setTimeout(function(){
            console.log("Dos")
        }, 1000)
    }

    function uno(){
        setTimeout(function(){
            console.log("Uno")
        }, 0)
        dos();
        console.log("Tres")
    }

    uno();
    console.log('Fin')
})();

/*
test de codigo
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

*/