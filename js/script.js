const homeLink = document.querySelector('nav li:first-child a');
const projectsLink = document.querySelector('nav li:last-child a');


homeLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '/';
});


projectsLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '/projects';
});