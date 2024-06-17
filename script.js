// Перемикання стилів
function switchStyle(styleName) {
    const stylesheet = document.getElementById('stylesheet');
    if (styleName === 'light') {
        stylesheet.href = 'light-style.css';
        document.body.className = 'light';
    } else {
        stylesheet.href = 'dark-style.css';
        document.body.className = 'dark';
    }
}

// Слайд-шоу
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Зміна слайдів кожні 3 секунди
}
