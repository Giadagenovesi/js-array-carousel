// inserisco tutte le immagini in un array.
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

console.log(imagesArray);

const sliderContainer = document.querySelector(".slider-items");
console.log(sliderContainer);

for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;

    console.log(sliderItem);
sliderContainer.innerHTML += sliderItem;
}

// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

const items = document.getElementsByClassName("item");
items[0].classList.add("active");

