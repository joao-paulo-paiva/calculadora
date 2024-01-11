let themeButton = document.getElementById('themeButton');
let iconTheme = document.getElementById('iconTheme');

let body = document.querySelector('body');

themeButton.addEventListener('click', function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    iconTheme.classList.toggle('fa-moon');
    iconTheme.classList.toggle('fa-sun');
});