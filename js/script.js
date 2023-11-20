const nextBtn = document.querySelectorAll(".next-date")
const previousBtn = document.querySelectorAll(".previous-date")

const slides = document.querySelectorAll(".page")
let numberSlide = 0;


const changeNextCalendarDate = () => {
    if (numberSlide < slides.length) {
        slides[numberSlide].classList.add("hide")
        numberSlide++
        slides[numberSlide].classList.remove("hide")
    }
}

const changePreviousCalendarDate = () => {
    if (numberSlide > 0) {
        slides[numberSlide].classList.add("hide")
        numberSlide--;
        slides[numberSlide].classList.remove("hide")
    }
}


nextBtn.forEach(btn => btn.addEventListener("click", changeNextCalendarDate))
previousBtn.forEach(btn => btn.addEventListener("click", changePreviousCalendarDate))