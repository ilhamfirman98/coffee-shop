/*
    Daftar & Login JS
    -------------------------------------------------------
    Skrip ini menangani fungsionalitas menu navigasi
    dan tab pendaftaran/login.
*/

// --- Fungsionalitas Menu Navigasi (Mobile) ---
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// --- Fungsionalitas Tab (Daftar & Login) ---
const authTabs = document.getElementById('authTabs');
if (authTabs) {
    authTabs.addEventListener('click', (event) => {
        const targetButton = event.target.closest('.tab-nav-button');

        // Pastikan yang diklik adalah tombol tab
        if (!targetButton) return;

        // Ambil ID tab yang akan ditampilkan
        const targetTabId = targetButton.dataset.tab;
        
        // Hapus kelas 'active' dari semua tombol dan pane
        const buttons = authTabs.querySelectorAll('.tab-nav-button');
        const panes = document.querySelectorAll('.tab-pane');

        buttons.forEach(btn => btn.classList.remove('active'));
        panes.forEach(pane => pane.classList.remove('active'));

        // Tambahkan kelas 'active' pada tombol dan pane yang sesuai
        targetButton.classList.add('active');
        const targetPane = document.getElementById(targetTabId);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    });
}
