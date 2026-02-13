// Question no 1  
var today = new Date();
console.log(today);

// Question no 2
var currentMonth = today.getMonth();    
console.log(currentMonth);

// Question no 3
var currentDay = today.getDay();
console.log(currentDay);

// Question no 4

var userDate = prompt("what is the day today");
if (userDate === "saturday" || userDate === "sunday") {
    alert("It's Fun day");
}
else {
    alert("JA be kaam pr ");
}

// question no 5

let date = parseInt(prompt("Enter the date (1-31):"));

if (date < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}


// Question no 6

let currentDate = new Date();
minutesSince1970 = currentDate.getTime() / (1000 * 60);
console.log("Minutes since Jan 1, 1970:", minutesSince1970);

// Question no 7

let currentHour = currentDate.getHours();
if (currentHour < 12) {
    console.log("It's AM");
} else {
    console.log("It's PM");
}

// Question no 8
let laterDate = new Date(2020, 11, 31);
console.log(laterDate);

// Question no 9
let ramadanStart = new Date(2015, 5, 18);
let today = new Date();
let diff = today.getTime() - ramadanStart.getTime();
let daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(daysPassed + " days have passed since 1st Ramadan (June 18, 2015).");

// Question no 10

let referenceDate = new Date(2015, 0, 1);
let currentDate = new Date();
let diffInSeconds = Math.floor((currentDate.getTime() - referenceDate.getTime()) / 1000);
console.log("Seconds that have elapsed since the beginning of 2015: " + diffInSeconds);

// Question no 11
let ramadanStart = new Date(2015, 5, 18);

let today = new Date();

let diff = today.getTime() - ramadanStart.getTime();

let daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log(daysPassed + " days have passed since 1st Ramadan (June 18, 2015).");

// Question no 12
let currentDate = new Date();
let oneHourAgo = new Date(currentDate.getTime() - (60 * 60 * 1000));
console.log("Current date and time: " + currentDate);
console.log("1 hour ago, it was: " + oneHourAgo);

// Question no 13
let currentDate = new Date();
let hundredYearsAgo = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate());
console.log("Current date: " + currentDate);
console.log("100 years ago, it was: " + hundredYearsAgo);

// Question no 14
let age = parseInt(prompt("Enter your age:"));
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
console.log("Your birth year is: " + birthYear);

// Question no 15
let customerName = prompt("Enter Customer Name:");
let currentMonth = prompt("Enter Current Month:");
let units = parseFloat(prompt("Enter Number of Units:"));

let chargesPerUnit = 16;
let latePaymentSurcharge = 350;   

let netAmount = units * chargesPerUnit;
let grossAmount = netAmount + latePaymentSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));


