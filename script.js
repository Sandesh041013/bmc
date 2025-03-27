document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const sectionOffsetTop = targetSection.offsetTop; 
                const scrollToPosition = sectionOffsetTop - navbarHeight; 
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
