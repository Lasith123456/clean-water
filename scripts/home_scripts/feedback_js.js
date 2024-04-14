document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', event => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Check if all required fields are filled
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                return;
            }
        });

        // If any required field is not filled, show an alert
        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }

        // Collect form data
        const formData = new FormData(form);

        // Display the confirmation message
        confirmationMessage.innerHTML = 'Thank you for your feedback!';

        // Reset the form after a delay (optional)
        setTimeout(() => {
            confirmationMessage.innerHTML = ''; // Clear the confirmation message
        }, 3000); // 3000 milliseconds = 3 seconds, adjust as needed

        // Prepare email body with form data
        let emailBody = '';
        for (const pair of formData.entries()) {
            emailBody += `${pair[0]}: ${pair[1]}\n`;
        }

        // Prompt user to send email via their email client
        const emailSubject = 'Feedback Submission';
        const emailLink = `mailto:janithyasiru.2002@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = emailLink;
    });

    // Function to reset the form
    const resetForm = () => {
        form.reset();
        confirmationMessage.innerHTML = ''; // Clear the confirmation message
    };

    // Attach event listener to the reset button
    const resetButton = document.querySelector('input[type="reset"]');
    resetButton.addEventListener('click', resetForm);
});
