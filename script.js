const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        window.open('https://www.instagram.com/thesatyajitsethy/', '_blank');
    } else {
        alert('Please fill in both fields before proceeding.');
    }
});
