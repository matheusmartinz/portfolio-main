// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// let section = document.querySelector('section');
// let navLinks = document.querySelector('header nav ul li a ');

// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach (links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav ul li a[href*=' + id + ' ]').classList.add
//                 ('active')
//             })
//         }
//     })
// }

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('.navbar a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('active');
        navbar.classList.toggle('active');
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('active');
        });
    });
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section'); // Correção: selecionar todas as seções
let navLinks = document.querySelectorAll('header .navbar ul li a'); // Correção: selecionar todos os links de navegação

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .navbar ul li a[href*=' + id + ']').classList.add('active'); // Correção: adicionar classe 'active' corretamente
            });
        }
    });
};

    const textarea = document.querySelector("#textarea");

    textarea.addEventListener("keyup", e => {
        let scHeight = e.target.scrollHeight;
        textarea.style.height = "auto";
        textarea.style.height = `${scHeight}px`;
    });

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // DESATIVAR A ANIMAÇÃO DE LINHA DO NOME DA NAVEGAÇÃO DO MENU

// document.addEventListener('DOMContentLoaded', function() {
//     const menuItems = document.querySelectorAll('.navbar ul li a');

//     menuItems.forEach(item => {
//         item.addEventListener('click', function() {
//             menuItems.forEach(i => i.classList.remove('active')); // Remove 'active' de todos os itens
//             this.classList.add('active'); // Adiciona 'active' ao item clicado
//         });
//     });
// });






