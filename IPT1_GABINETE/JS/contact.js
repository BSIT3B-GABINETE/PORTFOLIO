document.addEventListener("DOMContentLoaded", () => {
    const contactContainer = document.querySelector('.contact-container');
    const contactForm = document.querySelector('.contact-form');
    const contactDetails = document.querySelector('.contact-details');
    const socials = document.querySelectorAll('.socials a');


    setTimeout(() => {
        contactContainer.classList.add('visible');
        contactForm.classList.add('visible');
        contactDetails.classList.add('visible');
        

        socials.forEach((social, index) => {
            setTimeout(() => {
                social.classList.add('visible');
            }, index * 100); 
        });
    }, 200);
});
