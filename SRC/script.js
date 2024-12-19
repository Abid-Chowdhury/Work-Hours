// Function to enforce the 1-12 range for time inputs
function enforceTimeRange(event) {
    const input = event.target;
    const id = input.id;

    // Parse the input value as a number
    let value = parseInt(input.value, 10);

    if (id === 'hour') {
        // If the value exceeds 12, set it to 12
        if (value > 12) {
            input.value = 12;
        } else if (value < 1) {
            // If the value is less than 1, set it to 1
            input.value = 1;
        }
    }

    if (id === 'minute') {
        // If the value exceeds 59, set it to 59
        if (value > 59) {
            input.value = 59;
        } else if (value < 1) {
            // If the value is less than 1, set it to 1
            input.value = 1;
        }        
    }
}

// Attach the function to all time inputs
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', enforceTimeRange);
});
