$(document).ready(function() {
    // Show login form with fadeIn
    $('#showLogin').click(function() {
        $('#loginForm').fadeIn(500); // 500ms fade-in
    });

    // Hide login form with fadeOut
    $('#closeBtn').click(function() {
        $('#loginForm').fadeOut(500); // 500ms fade-out
    });

    // Optional: Handle submit
    $('#submitBtn').click(function() {
        const username = $('#username').val();
        const password = $('#password').val();
        alert(`Username: ${username}\nPassword: ${password}`);
        $('#loginForm').fadeOut(500); // fade out after submit
    });
});
