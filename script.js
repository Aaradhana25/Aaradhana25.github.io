// Function to handle category selection
function showCategory(category) {
    // Store the selected category in local storage
    localStorage.setItem('selectedCategory', category);
    
    // Redirect to the category page
    window.location.href = `${category}.html`;
}

// Function to handle background color change on hover
document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');
    const colorOverlay = document.querySelector('.color-overlay');
    
    // Add hover effects for category items
    categoryItems.forEach(item => {
        const color = item.getAttribute('data-color');
        
        item.addEventListener('mouseenter', () => {
            colorOverlay.style.backgroundColor = `${color}10`; // Adding transparency
        });
        
        item.addEventListener('mouseleave', () => {
            colorOverlay.style.backgroundColor = 'transparent';
        });
    });
    
    // Check if coming from main page with selected category
    const selectedCategory = localStorage.getItem('selectedCategory');
    if (selectedCategory && document.querySelector('.back-btn')) {
        document.querySelector('.section-title').textContent = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
    }
});

// Function to go back to main menu
function goBackToMenu() {
    window.location.href = 'index.html#menu';
}
function toggleMobileMenu() {
    document.querySelector('header').classList.toggle('mobile-menu-active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('header').classList.remove('mobile-menu-active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.main-nav')) {
        document.querySelector('header').classList.remove('mobile-menu-active');
    }
});