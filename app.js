// Select elements for bill, tip percentage, and outputs
var billAmount = document.querySelector(".bill");
var tipPercentage = document.querySelector(".tip");
var totalAmount = document.querySelector(".totalAmount");
var tipAmount = document.querySelector(".tipAmount");

// Function to calculate tip and total cost
function calculate() {
    // Convert string input to numbers
    var bill = parseFloat(billAmount.value);
    var tipPercent = parseFloat(tipPercentage.value);   // Value retrieves input from fields

    // Ensure valid inputs

        /* 
        - isNaN() is a JavaScript function that checks if a value is "Not-a-Number" (NaN). 
        If the value is a number, isNaN() will return false, and if it's not a number, it will return true.
        
        - !isNaN() means "is a valid number." The exclamation mark negates the isNaN() result, so it returns true if the value is a valid number.
        */

    if (!isNaN(bill) && !isNaN(tipPercent)) {
        // Calculate tip and total
        var tip = (tipPercent / 100) * bill;
        var totalCost = bill + tip;

        // Update the displayed amounts
        tipAmount.textContent = tip.toFixed(2);  // Display tip
        totalAmount.textContent = totalCost.toFixed(2);  // Display total amount
    }
}

// Attach event listeners to input fields to trigger calculation on input
billAmount.addEventListener('input', calculate);
tipPercentage.addEventListener('input', calculate);

// Optionally, you can also use a button for manual calculation
var calculateButton = document.querySelector('.calculateButton');
calculateButton.addEventListener('click', calculate);
