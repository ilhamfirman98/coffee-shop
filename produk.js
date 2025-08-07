// --- Navbar Toggle for Mobile ---
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
}

// --- Product Detail Modal ---
document.addEventListener('DOMContentLoaded', () => {
    const productModal = document.getElementById('productDetailModal');
    if (!productModal) return;

    const modalTitle = document.getElementById('modalProductTitle');
    const modalImage = document.getElementById('modalProductImage');
    const modalDescription = document.getElementById('modalProductDescription');
    const modalPrice = document.getElementById('modalProductPrice');
    const modalCloseButtons = document.querySelectorAll('#modalCloseButton, #modalCloseButtonFooter');
    const productDetailButtons = document.querySelectorAll('.card button[data-product-name]');

    productDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-product-name');
            const desc = button.getAttribute('data-product-desc');
            const price = button.getAttribute('data-product-price');
            const img = button.getAttribute('data-product-img');

            modalTitle.textContent = name;
            modalImage.src = img;
            modalDescription.textContent = desc;
            modalPrice.textContent = price;
            productModal.style.display = 'flex';
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            productModal.style.display = 'none';
        });
    });

    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });
});
