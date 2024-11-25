document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector('.about-container');

    setTimeout(() => {
        aboutSection.classList.add('visible');
    }, 200); // Delay bago mag-slide-in
});
