// js/main.js

document.addEventListener('DOMContentLoaded', function () {
    // Модальное окно
    const modal = document.getElementById('buyModal');
    const btn = document.querySelector('.btn-primary');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Переключение языка
    const languageSelector = document.getElementById('languageSelector');
    languageSelector.addEventListener('change', function () {
        const selectedLanguage = languageSelector.value;
        alert(`Вы выбрали язык: ${selectedLanguage}`);
    });

    // Плавная прокрутка
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Валидация формы
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Пожалуйста, заполните все поля.');
                event.preventDefault();
            } else {
                alert('Форма успешно отправлена!');
            }
        });
    }

    // Загрузка контента через AJAX
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const moreContent = document.getElementById('moreContent');

    if (loadMoreBtn && moreContent) {
        loadMoreBtn.addEventListener('click', function () {
            fetch('more-content.html')
                .then(response => response.text())
                .then(data => {
                    moreContent.innerHTML += data;
                })
                .catch(error => console.error('Ошибка при загрузке контента:', error));
        });
    }
});
