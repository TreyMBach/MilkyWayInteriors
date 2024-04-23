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



  