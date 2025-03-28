function checknumber() {
    const num = parseInt(document.getElementById("numberInput").value); // Corrected "parselnt" to "parseInt"

    let message = "";

    if (isNaN(num)) { // Added check for NaN (Not a Number)
        message = "Please enter a valid number.";
    } else if (num % 4 === 0 && num % 6 === 0) {
        message = "Divisible by 4 and 6."; // Corrected message for clarity
    } else if (num % 7 === 0) { // Corrected the condition: number % 7 should be number % 7 === 0
        message = "Divisible by 7."; // Corrected message for clarity
    } else {
        message = "Not divisible by 4, 6, or 7."; // More accurate message
    }

    document.getElementById("tempMessage").textContent = message;
}
