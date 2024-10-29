document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (username && password && name) {
        window.location.href = 'index.html';
    } else {
        messageDiv.textContent = 'Por favor, completa todos los campos.';
        messageDiv.classList.remove('hidden');
    }
});

document.getElementById('guestButton').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});