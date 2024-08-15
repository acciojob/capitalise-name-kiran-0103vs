//your JS code here. If required.
// Get the input field by its ID
const inputField = document.getElementById('fname');

// Add an event listener for the blur event (losing focus)
inputField.addEventListener('blur', function() {
    // Convert the input field value to uppercase
    inputField.value = inputField.value.toUpperCase();
});

