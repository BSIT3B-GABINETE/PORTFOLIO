document.addEventListener("DOMContentLoaded", () => {
    const servicesSection = document.querySelector('.services-container');

    setTimeout(() => {
        servicesSection.classList.add('visible');
    }, 200);
});
