// script.js
window.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.getElementById('level');

    if (targetElement) {
        let domLevel = 0;
        let currentElement = targetElement;

        while (currentElement !== document.documentElement) {
            currentElement = currentElement.parentNode;
            domLevel++;
        }

        // Display the result using the alert function
        alert(`The level of the element is: ${domLevel}`);
    } else {
        alert('Element with ID "level" not found.');
    }
});

