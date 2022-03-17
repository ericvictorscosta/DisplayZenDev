const header = document.querySelector('header.div-header');
const button = document.querySelector('div.icon-menu');
const closeButton = document.querySelector('div.icon-menu').children[0];

button.addEventListener('click', () => {
     header.classList.toggle('active')
}); 