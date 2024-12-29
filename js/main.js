import { clearView, qs } from "./utils.mjs";


const wax = document.querySelector(".image-container");
const mainContent = qs("#main__content");

wax.addEventListener("click", async () => {
    clearView(mainContent);

    const song = new Audio("audios/test.mp3");
    await song.play();

    loadImage(mainContent);
});

function loadImage(parent) {
    const img = document.createElement("img");

    img.src = "images/1.jpg";
    img.alt = "hero";
    img.classList.add("hero");


    const message = document.createElement("h1");

    message.innerText = "Aqui sigue lo demas estupida! ->"

    parent.appendChild(img);
    parent.appendChild(message);
}
