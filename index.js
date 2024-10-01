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

const tips = [
    "Chief is working hard on it. Patience.",
    "Did you know that Chief is studying computer engineering?",
    "Of course you don't.",
    "Error 404... Ups, not now.",
    "Welcome.",
    "Welcome back again.",
    "Uhmm, now you really know... Some kind of paradox?",
    "Nothing has changed the last time you visited me.",
    "Chief, what are you doing?!",
    "\"It always ends like this.\"",
    "Did you know that Chief can also make videogames?",
    "\"I never quite realized ... how beautiful this world is.\"",
    "...",
    "Chief is still working hard on it.",
    "C'mon, don't be impatience, god.",
    "Is Chief coming back one day..?",
    "Where are you chief..?",
    "Probably you have seen this loading screen for two years.",
    "La vida es una lenteja o la tomas o la dejas",
    "Chief is not working hard on this, don't be fooled.",
    "Yes, Chief has come back, but still not working on this >:(",
    "Chief is currently in the 4th year (finally T_T).",
    "You can press Ctrl+Shift+º and see... uh oh...",
    "I didn't suppose to tell you that... Fine whatever.",
    "It doesn't work on mobile, jaja",
    "The Ctrl+Shift+º was an idea I had, not working for now.",
    "Don't listen to the others, I'm really working on this (for now).",
    "*Upcoming categories... Animation?",
    "PLAY OUTERWILDS RIGHT NOW!"
]
const tip = document.getElementById("tip");
tip.textContent = tips[Math.floor(Math.random() * tips.length)];
setInterval(() => {
    tip.textContent = tips[Math.floor(Math.random() * tips.length)];
}, 10000)

// Escucha el evento de scroll
window.addEventListener('scroll', () => {
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
buttonUp.addEventListener("click", () => {
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
