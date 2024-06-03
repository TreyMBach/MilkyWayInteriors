
document.addEventListener('DOMContentLoaded', function() {
        function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        const size = Math.random() * 3 + 1; // Random size between 1px and 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration between 1s and 3s
        document.querySelector('.star-background').appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000); // Adjusted timeout to 3000ms to match longer animation duration
    }

    setInterval(createStar, 100);
});