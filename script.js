const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
btn?.addEventListener('click',()=>links?.classList.toggle('mobile-open'));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('mobile-open')));