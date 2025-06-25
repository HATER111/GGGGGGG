document.addEventListener('DOMContentLoaded', function() {
    // Добавьте здесь обработчики событий для формы
    const formInputs = document.querySelectorAll('input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#666';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
        });
    });
});