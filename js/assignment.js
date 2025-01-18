"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(myNumbers) {
    let smallest = myNumbers[0];
    for (let i = 1; i < myNumbers.length; i++) {
    if (myNumbers[i] < smallest) {
    smallest = myNumbers[i];
    }
    }
    return smallest;
   }


function findLargestNumber(myNumbers) {
    let largest = myNumbers[0];
    for (let i = 1; i < myNumbers.length; i++) {
    if (myNumbers[i] > largest) {
    largest = myNumbers[i];
    }
    }
    return largest;
   }   

function findAverage(myNumbers) {
    let sum = 0;
    for (let i = 0; i < myNumbers.length; i++) {
    sum += myNumbers[i];
    }
    return sum / myNumbers.length;
   }


function smallestAnswer() {
    smallestNumberElement.innerHTML = findSmallestNumber(myNumbers);
}

function largestAnswer() {
    largestNumberElement.innerHTML = findLargestNumber(myNumbers);
}

function averageAnswer() {
    averageNumberElement.innerHTML = findAverage(myNumbers);
}

   function render() {
    smallestAnswer();
    largestAnswer();
    averageAnswer();
}

submissionBtn.addEventListener("click", function () {
    render();
});