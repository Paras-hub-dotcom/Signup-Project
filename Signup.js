document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    alert('Sign up successful!');
    // Add your sign-up logic here
});