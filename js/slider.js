// Services Carousel
let currentIndex = 1; // Start at 1 since we will add clones

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = currentIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(() => moveCarousel(1), 10000);

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    const firstClone = items[0].cloneNode(true);
    const lastClone = items[totalItems - 1].cloneNode(true);

    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, items[0]);

    carousel.style.transform = `translateX(-100%)`;

    carousel.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            carousel.style.transition = 'none';
            currentIndex = totalItems;
            carousel.style.transform = `translateX(${currentIndex * -100}%)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            });
        } else if (currentIndex === totalItems + 1) {
            carousel.style.transition = 'none';
            currentIndex = 1;
            carousel.style.transform = `translateX(${currentIndex * -100}%)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            });
        }
    });
});