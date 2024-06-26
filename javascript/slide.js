document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.button-link').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.page-container').style.animation = 'slideOutToRight 1s ease-in-out forwards';
        setTimeout(function() {
            window.location.href = 'combined.html';
        }, 1000);
    });
});