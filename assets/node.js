'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const N = parseInt(readLine().trim(), 10);

    if (N % 2 !== 0) {
        // Case 1: N is odd
        console.log("Weird");
    } else if (N % 2 === 0 && N >= 2 && N <= 5) {
        // Case 2: N is even and in the range 2 to 5
        console.log("Not Weird");
    } else if (N % 2 === 0 && N >= 6 && N <= 20) {
        // Case 3: N is even and in the range 6 to 20
        console.log("Weird");
    } else if (N % 2 === 0 && N > 20) {
        // Case 4: N is even and greater than 20
        console.log("Not Weird");
    }
}
