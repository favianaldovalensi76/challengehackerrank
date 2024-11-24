function processData(input) {
    // Parse the input
    const lines = input.trim().split("\n");
    const n = parseInt(lines[0]); // Number of test cases
    const results = [];
    
    // Process each string
    for (let i = 1; i <= n; i++) {
        const s = lines[i];
        let evenChars = '';
        let oddChars = '';
        
        // Separate even-indexed and odd-indexed characters
        for (let j = 0; j < s.length; j++) {
            if (j % 2 === 0) {
                evenChars += s[j];
            } else {
                oddChars += s[j];
            }
        }
        // Combine results
        results.push(`${evenChars} ${oddChars}`);
    }
    
    // Output the results
    console.log(results.join("\n"));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
