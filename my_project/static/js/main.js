// Get the elements that you want to add the click event to
const homeLink = document.querySelector('nav li:first-child a');
const projectsLink = document.querySelector('nav li:last-child a');

// Add a click event listener to the home link
homeLink.addEventListener('click', (event) => {
    event.preventDefault(); // prevent the link from navigating to the href URL
    // navigate to the home page using JavaScript
    window.location.href = '/';
});

// Add a click event listener to the projects link
projectsLink.addEventListener('click', (event) => {
    event.preventDefault(); // prevent the link from navigating to the href URL
    // navigate to the projects page using JavaScript
    window.location.href = '/projects';
});