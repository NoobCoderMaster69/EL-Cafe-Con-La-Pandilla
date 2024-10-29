let currentIndex = 0;
const slide = document.getElementById("carouselSlide");
const images = document.querySelectorAll(".carousel-item");

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slide.style.transform = `translateX(${offset}%)`;
}


const audio = document.getElementById("backgroundMusic");

audio.volume = 0.03;

const lastTime = localStorage.getItem("audioCurrentTime") || 0;
audio.currentTime = lastTime;

audio.play();

audio.addEventListener("timeupdate", () => {
    localStorage.setItem("audioCurrentTime", audio.currentTime);
});

