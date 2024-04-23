document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        const userData = {
            fullName: fullName,
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            gender: gender
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Data stored in local storage.');

        document.getElementById('fullName').value = "";
        document.getElementById('username').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phoneNumber').value = "";
        document.getElementById('password').value = "";
        document.getElementById('confirmPassword').value = "";

        const genderRadios = document.querySelectorAll('input[name="gender"]');
        genderRadios.forEach(radio => {
            radio.checked = false;  
        });

        window.location.href = './index.html';
    });

});
