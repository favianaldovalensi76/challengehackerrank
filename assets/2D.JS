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
    // Membaca matriks 6x6
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    // Inisialisasi nilai maksimum
    let maxSum = -Infinity;

    // Loop untuk mencari hourglass
    for (let i = 0; i < 4; i++) { // Baris maksimum adalah 3 (6 - 3)
        for (let j = 0; j < 4; j++) { // Kolom maksimum adalah 3 (6 - 3)
            // Hitung jumlah elemen hourglass
            let hourglassSum = 
                arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +  // Baris atas
                arr[i + 1][j + 1] +                        // Tengah
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]; // Baris bawah
            
            // Update nilai maksimum
            maxSum = Math.max(maxSum, hourglassSum);
        }
    }

    // Cetak hasil
    console.log(maxSum);
}
