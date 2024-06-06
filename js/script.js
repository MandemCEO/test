let slideIndex = 1; // Ensure this is declared only once

async function includeHTML() {
    const header = await fetch('header.html').then(response => response.text());
    const footer = await fetch('footer.html').then(response => response.text());
    document.getElementById('header-placeholder').innerHTML = header;
    document.getElementById('footer-placeholder').innerHTML = footer;
    initializeMenu();
    showSlides(slideIndex); // Initialize the slideshow
}

function initializeMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const menuToggleIcon = mobileMenu.querySelector('img');

    mobileMenu.addEventListener('click', () => {
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            menuToggleIcon.src = 'images/menu_FILL0_wght400_GRAD0_opsz48.svg';
        } else {
            mobileNav.classList.add('active');
            menuToggleIcon.src = 'images/close_FILL0_wght400_GRAD0_opsz48.svg';
        }
    });
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

includeHTML();
