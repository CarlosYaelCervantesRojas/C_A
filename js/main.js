const wedding = new Date("2025-04-10T17:00");

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    
    const timeUntil = (wedding - now);
    
    const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);
    
    document.getElementById("counter").innerHTML = "Faltan: " + days + "d, " + hours + "h, "
    + minutes + "m, " + seconds + "s";
    
    
    if (timeUntil <= 0) {
        clearInterval(countdownFunction);
        document.getElementById("counter").innerHTML = "¡Felizmente Casados!";
    }
}, 1000);


const sobre = document.getElementById("inv");
const main = document.getElementById("main");
const sello = document.getElementById("sello");

const audio = new Audio("audios/song.mp3");

sello.addEventListener("click", () => {
    sobre.classList.add("hidden");
    sobre.removeAttribute("id")
    main.classList.remove("hidden");

    audio.play();
});

function getParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const numInv = urlParams.get("pase");
    
    if (numInv) {
        return Number(numInv);
    }
}

function setPass() {
    const pass = getParam();

    if (pass) {
        localStorage.setItem("pase", pass);
        showPass();
    }
}

function showPass() {
    const pase = localStorage.getItem("pase");

    if (pase) {
        const pass = document.getElementById("pass");
        pass.innerText = `Pase para: ${pase}`;
    }
}

setPass();