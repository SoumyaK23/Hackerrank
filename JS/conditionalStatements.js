'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    // Write your code here
    if ((score <= 30) && (score > 25)) {
        return grade = "A";
    } else  if ((score <= 25) && (score > 20)) {
        return grade = "B";
    } else  if ((score <= 20) && (score > 15)) {
        return grade = "C";
    } else  if ((score <= 15) && (score > 10)) {
        return grade = "D";
    } else  if ((score <= 10) && (score > 5)) {
        return grade = "E";
    } else  if ((score <= 5) && (score > 0)) {
        return grade = "F";
    }
    /* The input wasn't a number. */
    else {
        return "Your input must be an integer.";
    }
    return grade;
}

