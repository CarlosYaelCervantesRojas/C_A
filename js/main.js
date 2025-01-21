// const wedding = new Date("2025-04-10T17:00");

// const countdownFunction = setInterval(function() {
//     const now = new Date().getTime();
    
//     const timeUntil = (wedding - now);
    
//     const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);
    
//     document.getElementById("counter").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
    
    
//     // if (distance < 0) {
//     //     clearInterval(countdownFunction);
//     //     document.getElementById("countdown").innerHTML = "¡Tiempo terminado!";
//     // }
// }, 1000);


const sobre = document.getElementById("inv");
const main = document.getElementById("main");
const sello = document.getElementById("sello");

const audio = new Audio("audios/song.wav");

sello.addEventListener("click", () => {
    sobre.classList.add("hidden");
    sobre.removeAttribute("id")
    main.classList.remove("hidden");

    audio.play();
});