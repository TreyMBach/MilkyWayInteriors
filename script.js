// Socials Slider from the right

document.getElementById('contact-page').addEventListener('click', function(event) {
    event.preventDefault(); // Stop the default anchor behavior
    const sidebar = document.getElementById('social-sidebar');
    const navbar = document.querySelector('.navbar'); // Select the navbar
    const sidebarWidth = '80px'; // Same as your sidebar's width

    if (sidebar.style.right === '0px') {
        sidebar.style.right = `-${sidebarWidth}`; // Move sidebar off-screen to the right
        navbar.style.left = '0'; // Reset navbar position
    } else {
        sidebar.style.right = '0px'; // Bring sidebar into view
        navbar.style.left = `-${sidebarWidth}`; // Move navbar to the left
    }
});

// Navbar Menu Slide up with mobile view

document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById('navbar-toggle');
    toggle.addEventListener('click', function() {
        this.classList.toggle('active');
        const menu = document.querySelector('.navbar__menu');
        const menuStyle = window.getComputedStyle(menu); // Get the computed style of the menu
        if (menuStyle.transform === 'matrix(1, 0, 0, 1, 0, 0)') { // Check if transform is 'translateY(0)'
            menu.style.transform = "translateY(100%)";
            setTimeout(() => { menu.style.display = "none"; }, 300); // Hide after transition
        } else {
            menu.style.display = "block"; // Display before sliding up
            setTimeout(() => { menu.style.transform = "translateY(0)"; }, 10); // Delay to allow display to apply
        }
    });
});

// Slider
window.addEventListener('load', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    
    // Clone the first slide and append it to the slides container
    const firstSlideClone = slides[0].cloneNode(true);
    firstSlideClone.id = "first-clone"; // Add an ID or class to the cloned element
    document.querySelector(".slides").appendChild(firstSlideClone);
    
    function slideToRight() {
        if (currentIndex === totalSlides - 1) {
            currentIndex++;
            updateSlidePosition();
            setTimeout(() => {
                document.querySelector('.slides').style.transition = 'none';
                currentIndex = 0;
                updateSlidePosition();
                // Trigger reflow/repaint
                void document.querySelector('.slides').offsetWidth;
                // Re-enable the transition
                document.querySelector('.slides').style.transition = "transform 2s ease-out";
            }, 2000); // The timeout should match the CSS transition duration
        } else {
            currentIndex++;
            updateSlidePosition();
        }
    }
    
    function updateSlidePosition() {
        const offset = currentIndex * -100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }
    
    setInterval(slideToRight, 5000); // The interval should be longer than the transition to allow it to finish
});


  