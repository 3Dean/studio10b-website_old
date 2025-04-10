// JavaScript Documentdocument.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        let offset = 70; // Height of the fixed header/nav bar

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });