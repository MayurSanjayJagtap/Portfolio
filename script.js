const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const sidebarClose = sidebar.querySelector('.sidebar-close');

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuBtn?.addEventListener('click', openSidebar);
overlay?.addEventListener('click', closeSidebar);
sidebarClose?.addEventListener('click', closeSidebar);

sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) closeSidebar();
});

const modal = document.getElementById('cert-modal');
const modalImg = modal.querySelector('.modal-img');
const closeBtn = modal.querySelector('.modal-close');

document.querySelectorAll('.cert-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openModal(card.dataset.image));
});

function openModal(src) {
    modalImg.src = src;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.body.style.overflow = '';
}

modal.addEventListener('click', e => {
    if (e.target === modal || e.target === modal.querySelector('.modal-backdrop')) closeModal();
});
closeBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});
