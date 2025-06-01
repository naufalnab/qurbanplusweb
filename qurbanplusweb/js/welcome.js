// Welcome page functionality
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Handle start button click
    startButton.addEventListener('click', handleStart);

    function handleStart() {
        // Show loading overlay
        loadingOverlay.style.display = 'flex';
        
        // Add button animation
        startButton.style.transform = 'scale(0.95)';

        // Mark as visited
        localStorage.setItem('hasVisited', 'true');

        // Simulate navigation delay
        setTimeout(() => {
            // Navigate to main app
            window.location.href = '../index.html';
        }, 1500);
    }

    // Add keyboard support
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleStart();
        }
    });

    // Touch feedback for mobile
    startButton.addEventListener('touchstart', () => {
        startButton.style.transform = 'scale(0.95)';
    });

    startButton.addEventListener('touchend', () => {
        startButton.style.transform = 'scale(1)';
    });
});