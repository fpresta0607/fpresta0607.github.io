const homeLink = document.querySelector('nav li:first-child a');
const projectsLink = document.querySelector('nav li:nth-child(2) a');
const aboutLink = document.querySelector('nav li:nth-child(3) a');
const BBLink = document.querySelector('nav li:last-child a');

homeLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '/';
});

projectsLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '/projects';
});

aboutLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '/about';
});

BBLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = '/beatBoost';
});

