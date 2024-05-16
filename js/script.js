// Socials Slider from the right

document.getElementById('contact-page').addEventListener('click', function(event) {
    event.preventDefault(); // Stop the default anchor behavior
    const sidebar = document.getElementById('social-sidebar');
    const navbar = document.querySelector('.navbar'); // Select the navbar
    const sidebarWidth = '80px'; // Same as your sidebar's width

    this.classList.toggle('active'); // Toggle active state 
    if (sidebar.style.right === '0px') {
        sidebar.style.right = `-${sidebarWidth}`; // Move sidebar off-screen to the right
        navbar.style.left = '0'; // Reset navbar position
    } else {
        sidebar.style.right = '0px'; // Bring sidebar into view
        navbar.style.left = `-${sidebarWidth}`; // Move navbar to the left
    }
});

const navbarToggle = document.getElementById('navbar-toggle'); // Hamburger toggle button
const menu = document.querySelector('.navbar__menu'); // Navbar menu
const sidebar = document.getElementById('social-sidebar'); // Social sidebar

navbarToggle.addEventListener('click', function() {
    // Toggle the sidebar display
    const sidebarWidth = '80px'; // Sidebar width

    if (sidebar.style.right === '0px') {
        sidebar.style.right = `-${sidebarWidth}`; // Hide the sidebar
    } else {
        sidebar.style.right = '0px'; // Show the sidebar
    }
});

// Services Carousel
let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = currentIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;
}


setInterval(() => moveCarousel(1), 10000);

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;


const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);


carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, items[0]);


currentIndex = 1;
carousel.style.transform = `translateX(-100%)`;

carousel.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
        carousel.style.transition = 'none';
        currentIndex = totalItems;
        carousel.style.transform = `translateX(${currentIndex * -100}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        });
    } else if (currentIndex === totalItems + 1) {
        carousel.style.transition = 'none';
        currentIndex = 1;
        carousel.style.transform = `translateX(${currentIndex * -100}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        });
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


// Modal Popup

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

document.querySelectorAll('.gallery-item img').forEach(item => {
    item.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

  

// Store Message
function showStoreMessage() {
    alert("Coming Soon!");
}
