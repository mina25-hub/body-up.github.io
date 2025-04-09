document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('.menu-button');
    const menuSidebar = document.querySelector('.menu-sidebar');
    
    if (menuButton && menuSidebar) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            menuSidebar.classList.toggle('active');
        });
        
        const menuLinks = document.querySelectorAll('.menu-links a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuSidebar.classList.remove('active');
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!menuSidebar.contains(e.target) && e.target !== menuButton && !menuButton.contains(e.target)) {
                menuSidebar.classList.remove('active');
            }
        });
    }

    // Scroll to Top Button
    const scrollToTopLeftButton = document.querySelector('.top');
    if (scrollToTopLeftButton) {
        scrollToTopLeftButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }

    // Form Submission
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Store form data in localStorage
            const formData = {
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                dob: document.getElementById('dob').value,
                gender: document.getElementById('gender').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                zip: document.getElementById('zip').value,
                membership: document.getElementById('membership').value,
                goals: document.getElementById('goals').value,
                joinDate: new Date().toISOString()
            };
            
            localStorage.setItem('userProfile', JSON.stringify(formData));
            
            // Optional: Show success message or redirect
            alert('Registration successful!');
            // window.location.href = 'success.html';
        });
    }
});