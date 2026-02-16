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


// now for chapter 35-38


// Question no 1

function currentDateTime() {
    var now = new Date();
    console.log("Current date and time: " + now);
}

// Question no 2 

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "!");
}

// Question no 3

function addNumbers(a, b) {
  return a + b;
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let result = addNumbers(num1, num2);

console.log("Sum is: " + result);

// Question no 4
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } 
  else if (operator === "-") {
    return num1 - num2;
  } 
  else if (operator === "*") {
    return num1 * num2;
  } 
  else if (operator === "/") {
    return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  } 
  else {
    return "Invalid operator";
  }
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result = calculator(num1, num2, operator);
document.write("Result: " + result);

// Question no 5

function square(num) {
  return num * num;
}
let number = Number(prompt("Enter a number to find its square:"));
let squaredValue = square(number);
console.log("The square of " + number + " is: " + squaredValue);

// Question no 6

// cannot understand

// Question no 7

function showCounting(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}
let startNumber = Number(prompt("Enter start number:"));
let endNumber = Number(prompt("Enter end number:"));
showCounting(startNumber, endNumber);

// Question no 8
function calculateHypotenuse(base, perpendicular) {

  function calculateSquare(num) {
    return num * num;
  }

  return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

let base = Number(prompt("Enter base:"));
let perpendicular = Number(prompt("Enter perpendicular:"));

let result = calculateHypotenuse(base, perpendicular);

document.write("Hypotenuse is: " + result);

// Question no 9

function calculateArea(width, height) {
  return width * height;
}

var width = Number(prompt("Enter width:"));
var height = Number(prompt("Enter height:"));

var totalArea = calculateArea(width, height);

consolele.log("Area of the rectangle is: " + totalArea);

// Question no 10

// Question  no 11 

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let inputString = prompt("Enter a string:");
let result = capitalizeFirstLetter(inputString);
console.log("String with first letter capitalized: " + result);

// Question no 12

function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
let inputString = prompt("Enter a string:");
let longest = findLongestWord(inputString);
console.log("Longest word: " + longest);

// Question no 13

function countLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
let text = prompt("Enter a string:");
let letter = prompt("Enter the letter to count:");

let result = countLetter(text, letter);

console.log("The letter '" + letter + "' appears " + result + " times.");


    // Question no 14

function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  document.write("The circumference is: " + circumference + "<br>");
}


function calcArea(radius) {
  let area = Math.PI * radius * radius;
  document.write("The area is: " + area + "<br>");
}

let radius = Number(prompt("Enter the radius of the circle:"));
calcCircumference(radius);
calcArea(radius);
