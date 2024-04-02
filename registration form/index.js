document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Do something with the form data (e.g., send it to a server)
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Clear form fields
        form.reset();
    });
});
