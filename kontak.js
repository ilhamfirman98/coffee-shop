// --- Navigasi Mobile ---
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

// Mengatur event listener untuk tombol menu
menuButton.addEventListener('click', () => {
    // Menambah/menghapus kelas 'active' untuk menampilkan/menyembunyikan menu
    navMenu.classList.toggle('active');
});

// Menutup menu saat link di dalamnya diklik (untuk mobile)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// --- FAQ Interaktif ---
// Mendapatkan semua tombol FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

// Mengatur event listener untuk setiap tombol FAQ
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Mendapatkan elemen jawaban yang sesuai
        const answerId = question.getAttribute('data-faq');
        const answer = document.getElementById(answerId);
        
        // Mengubah kelas 'active' untuk menampilkan atau menyembunyikan jawaban
        question.classList.toggle('active');
        answer.classList.toggle('active');
    });
});
