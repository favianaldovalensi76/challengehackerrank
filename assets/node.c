using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        int n = int.Parse(Console.ReadLine());
        List<string> results = new List<string>();

        for (int i = 0; i < n; i++) {
            string s = Console.ReadLine();
            string evenChars = "";
            string oddChars = "";

            for (int j = 0; j < s.Length; j++) {
                if (j % 2 == 0) {
                    evenChars += s[j];
                } else {
                    oddChars += s[j];
                }
            }

            results.Add($"{evenChars} {oddChars}");
        }

        foreach (var result in results) {
            Console.WriteLine(result);
        }
    }
}