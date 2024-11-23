'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine().trim(), 10); // Membaca angka dari input
    
    // Loop untuk mencetak perkalian dari 1 hingga 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`); // Cetak hasil sesuai format
    }
}
