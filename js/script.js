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
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let activeItemIndex = 0;
items[activeItemIndex].classList.add("active");

// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//bottone next
nextBtn.addEventListener ("click", function() {
    if (activeItemIndex < items.length - 1) {
        //rimuovo classe active dall'elemento precedente
        items[activeItemIndex].classList.remove("active");

        // incremeto active index
        activeItemIndex++;

        //Aggiungo classe active all'elemento successivo
        items[activeItemIndex].classList.add("active");
    }
});

//bottone prev
prevBtn.addEventListener ("click", function() {
    if (activeItemIndex != 0 ) {
        //rimuovo classe active dall'elemento precedente
        items[activeItemIndex].classList.remove("active");

        // diminuisco active index
        activeItemIndex--;
    
        //Aggiungo classe active all'elemento successivo
        items[activeItemIndex].classList.add("active");
    } 
});

