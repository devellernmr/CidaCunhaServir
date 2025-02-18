document.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer');
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Verifica se a rolagem chegou ao fim da página
    if (scrollPosition >= documentHeight) {
        footer.classList.add('absolute');
    } else {
        footer.classList.remove('absolute');
    }
});

// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// script.js

const menuHamburguer = document.querySelector('.menu-hamburguer');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle the menu on hamburger icon click
menuHamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close the menu when clicking on a nav item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuHamburguer.contains(event.target)) {
        navLinks.classList.remove('open');
    }
});


// JavaScript Corrigido
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function(e) {
        if(window.innerWidth > 1024) return;

        // Bloqueia scroll do body
        document.body.classList.add('modal-open');

        const modal = document.createElement('div');
        modal.className = 'box-modal active';

        // Coleta dados dinâmicos
        const imgSrc = this.querySelector('img').src;
        const title = this.dataset.title || 'Título Padrão';
        const desc = this.dataset.description || 'Descrição Padrão';

        modal.innerHTML = `
            <div class="box-modal-content">
                <button class="close-btn">&times;</button>
                <img src="${imgSrc}" alt="${title}">
                <div class="mobile-details">
                    <h2>${title}</h2>
                    <p>${desc}</p>
                    <button class="buy-btn"><a href="#">Adiquira agora!!!</a></button>
                </div>
            </div>
        `;

        // Fechar modal
        modal.querySelector('.close-btn').addEventListener('click', () => {
            document.body.classList.remove('modal-open');
            modal.remove();
        });

        document.body.appendChild(modal);
    });
});