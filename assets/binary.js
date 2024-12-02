'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // Membaca input integer
    const n = parseInt(readLine().trim(), 10);
    
    // Konversi bilangan n ke representasi biner
    const binaryRepresentation = n.toString(2);
    
    // Pisahkan string biner berdasarkan nol
    const groupsOfOnes = binaryRepresentation.split('0');
    
    // Temukan panjang grup terpanjang
    const maxOnes = Math.max(...groupsOfOnes.map(group => group.length));
    
    // Cetak hasil
    console.log(maxOnes);
}
