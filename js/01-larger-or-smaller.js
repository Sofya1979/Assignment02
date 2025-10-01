const num1String = prompt("Enter the first integer:");
const num1 = parseInt(num1String);

// Prompt for the second integer
const num2String = prompt("Enter the second integer:");
const num2 = parseInt(num2String);

// Find the larger number
let largerNumber;
if (num1 > num2) {
    largerNumber = num1;
} else if (num2 > num1) {
    largerNumber = num2;
} else {
    largerNumber = "Both numbers are equal!";
}

// Display the result in the browser
alert("The larger number is:  "  + largerNumber);
document.write("The larger number is:  "  + largerNumber)
