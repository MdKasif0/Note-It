document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the feedback value
    const feedback = document.getElementById('feedbackInput').value;
    
    // If feedback is not empty, show thank you message
    if (feedback.trim() !== '') {
        document.getElementById('thankYouMessage').classList.remove('hidden');
        
        // Clear the input after submission
        document.getElementById('feedbackInput').value = '';
        
        // Hide the message after a few seconds
        setTimeout(() => {
            document.getElementById('thankYouMessage').classList.add('hidden');
        }, 3000);
    }
});
