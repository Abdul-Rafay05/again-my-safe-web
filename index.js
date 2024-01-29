const toggle = document.getElementById('humburger');
const ul = document.querySelector('ul');

toggle.addEventListener('click', () => {
    ul.classList.toggle('toggle_style');
});