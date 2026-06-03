document.querySelector('.explore-button').addEventListener('click', () => {
    document.querySelector('.fw-bold').scrollIntoView({ behavior: 'smooth' });
});
const toggleButton = document.getElementById('toggleButton');
const seemoreElements = document.querySelectorAll('.seemore');
toggleButton.addEventListener('click', function () {
    seemoreElements.forEach(function (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});
