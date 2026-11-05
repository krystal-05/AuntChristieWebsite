//slideshow on home page
const carousel = new bootstrap.Carousel('#carouselExampleRide', {
    interval: 5000,
    ride: 'carousel',
    pause: false
});


// automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();


