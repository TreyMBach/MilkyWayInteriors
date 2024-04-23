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
