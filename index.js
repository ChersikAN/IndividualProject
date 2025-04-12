document.querySelectorAll('.award-accordion-content').forEach(content => {
    content.style.display = 'none';
});

document.querySelectorAll('.award-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordion = header.parentElement;
        const content = header.nextElementSibling;

        const isActive = content.style.display === 'block';
        content.style.display = isActive ? 'none' : 'block';
        if (!isActive) {
            content.classList.add('active');
            header.classList.add('active');
            accordion.classList.add('active');
        } else {
            content.classList.remove('active');
            header.classList.remove('active');
            accordion.classList.remove('active');
            content.style.display = 'none';
        }
    });
});
const form = document.getElementById('form');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name-input').value.trim();
    const phone = document.getElementById('phone-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    let isValid = true;
    if (name === '') {
        nameError.textContent = "Пожалуйста, заполните поле";
        nameError.style.color = "red";
        isValid = false;
    }
    if (phone === '') {
        phoneError.textContent = "Пожалуйста, заполните поле";
        phoneError.style.color = "red";
        isValid = false;
    }
    if (email === '') {
        emailError.textContent = "Пожалуйста, заполните поле";
        emailError.style.color = "red";
        isValid = false;
    }
    if (isValid) {
        alert("Анкета отправлена");
        console.log({ name, phone, email });
        form.reset();
    }
})