/* BOTTOM BUTTON UP */
// Selecciona el botón
const buttonUp = document.getElementById("bottom-button-up");
const sections = [
    document.getElementById("section-0"),
    document.getElementById("section-1"),
    document.getElementById("section-2")
]
const entries  = [
    document.getElementById("index-0"),
    document.getElementById("index-1"),
    document.getElementById("index-2")
];

// Escucha el evento de scroll
window.addEventListener('scroll', function() {
    // Si el usuario se desplaza más de 100px, muestra el botón
    if (window.scrollY > 100) {
        buttonUp.setAttribute("style", "right: 15px");
        entries.forEach((element, index) => {
            setTimeout(() => {
                // Guardamos el valor de scrollY en una variable antes del timeout
                const currentScrollY = window.scrollY;
                if (currentScrollY > 100) {
                    element.style.right = "30px"; // Mover el elemento hacia la derecha
                } else {
                    element.style.right = "-150px"; // Esconder el elemento
                }
            }, index * 100);
        });
    } else {
        buttonUp.setAttribute("style", "right: -80px");
        entries.forEach((element, index) => {
            setTimeout(() => {
                element.style.right = "-150px"; // Esconder el elemento
            }, index * 100);
        });
    }

    if (window.scrollY >= sections[0].getBoundingClientRect().top + window.scrollY - 30 && this.window.scrollY < sections[1].getBoundingClientRect().top + window.scrollY - 30) {
        console.log("Hello");
        entries.forEach(element => {
            element.style.fontSize = "16px";
        });
        entries[0].style.fontSize = "20px";
    } else if (window.scrollY >= sections[1].getBoundingClientRect().top + window.scrollY - 30 && this.window.scrollY < sections[2].getBoundingClientRect().top + window.scrollY - 30) {
        entries.forEach(element => {
            element.style.fontSize = "16px";
        });
        entries[1].style.fontSize = "20px";
    } else if (window.scrollY >= sections[2].getBoundingClientRect().top + window.scrollY - 30 && this.window.scrollY) {
        entries.forEach(element => {
            element.style.fontSize = "16px";
        });
        entries[2].style.fontSize = "20px";
    } else {
        entries.forEach(element => {
            element.style.fontSize = "16px";
        });
    }
});

// Añade funcionalidad al botón para que al hacer click, vuelva al inicio
buttonUp.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll suave al inicio
    });
    entries.forEach(element => {
        element.style.fontSize = "16px";
    })
});

entries.forEach((element, index) => {
    element.addEventListener("click", function() {
        window.scrollTo({
            top: sections[index].getBoundingClientRect().top + window.scrollY - 20, 
            behavior: "smooth"
        })
    })
});
