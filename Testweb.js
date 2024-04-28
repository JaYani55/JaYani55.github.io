document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('glitterHeader');
    setInterval(() => {
        header.style.animation = 'glitter 1s infinite';
    }, 1000);
});
