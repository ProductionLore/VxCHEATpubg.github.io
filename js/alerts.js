document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Останавливаем обычную отправку формы

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formResponse.textContent = 'Спасибо! Ваше сообщение отправлено.';
                    form.reset();
                } else {
                    formResponse.textContent = 'Произошла ошибка. Попробуйте еще раз.';
                }
            })
            .catch(error => {
                formResponse.textContent = 'Произошла ошибка. Попробуйте еще раз.';
                console.error('Ошибка:', error);
            });
        });
    }
});
