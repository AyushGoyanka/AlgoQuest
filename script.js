// For taking feedback from the user.
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('feedbackResponse');

    if (name && email && message) {
        response.textContent = "Thank you for your feedback, " + name + "!";
        this.reset();
    } else {
        response.textContent = "Please fill out all fields!";
    }
});



// Fade out the current page when navigating to another page
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        // Add the fade-out class to body
        document.body.classList.add('fade-out');

        // After the fade effect is complete, redirect to the new page
        setTimeout(function() {
            window.location = link.href;
        }, 400); // Match the duration of the fade-out transition
    });
});
