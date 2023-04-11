const carouselImages = document.querySelector('.carousel-images');
const carouselItems = carouselImages.querySelectorAll('li');
const totalItems = carouselItems.length;
let index = 0;
let interval;

function startCarousel() {
  interval = setInterval(() => {
    carouselItems[index].classList.remove('active');
    index = (index + 1) % totalItems;
    carouselItems[index].classList.add('active');
  }, 3000);
}



startCarousel();