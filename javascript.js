//slides
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
// initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
        // console.log(intervalId);
    }

}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slided => {
        slided.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);

}
//slides
//-----------------------------------------------------
//back-top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();

        }
    });
    $('#backtop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });
});

function showMessage() {
    alert("Product added to cart successfully!");
}
const SubmitButton = document.getElementById("submit-button");

function changecolor() {
    SubmitButton.style.backgroundColor = "#1CA4B2";
}

function resetcolor() {
    SubmitButton.style.backgroundColor = "#20baca";
}
SubmitButton.addEventListener("click", function() {
    setTimeout(function() {
        changecolor();
    }, 100);
    setTimeout(function() {
        resetcolor();
    }, 2000);
    alert("Product added to cart successfully!");
    location.reload();
})