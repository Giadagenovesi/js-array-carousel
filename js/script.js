// inserisco tutte le immagini in un array.
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

for (let i = 0; i < imagesArray.lenght; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>` ;

    console.log(sliderItem);
}