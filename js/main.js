import {cards} from "./arrays/cardsArray.js"

const renderCart = (card) => {
    return `<div class="pricign-cards-item">
                <img class="pricign-cards-item-img" alt="img" src="${card.src}">
                <h3 class="pricign-cards-item-header">${card.title}</h3>
                <p class="pricign-cards-item-dev">${card.dev}</p>
                <p class="pricign-cards-item-price">${card.price}</p>
            </div>`
}

const renderShowcase = list => {
    document.querySelector('.pricign-cards').innerHTML = list.map(card => renderCart(card)).join('')
};

renderShowcase(cards);

let slides = document.querySelectorAll('#slides .download-info-slideshow-container-slideshows-slide'),
    currentSlide = 0;

function nextSlide() {
    slides[currentSlide].className = 'download-info-slideshow-container-slideshows-slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'download-info-slideshow-container-slideshows-slide showing';
};

function next() {
    nextSlide(currentSlide+1);
};

function previous() {
    nextSlide(currentSlide-1);
};

nextSlide();
next();
previous();
setInterval(nextSlide,3000);