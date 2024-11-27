using System;
using System.Collections.Generic;

class Solution {
    static void Main(String[] args) {
        // Membaca jumlah entri dalam phone book
        int n = int.Parse(Console.ReadLine());
        var phoneBook = new Dictionary<string, string>();

        // Membaca entri nama dan nomor telepon
        for (int i = 0; i < n; i++) {
            string[] entry = Console.ReadLine().Split(' ');
            string name = entry[0];
            string phoneNumber = entry[1];
            phoneBook[name] = phoneNumber;
        }

        // Memproses query sampai input habis
        string query;
        while ((query = Console.ReadLine()) != null) {
            if (phoneBook.ContainsKey(query)) {
                Console.WriteLine($"{query}={phoneBook[query]}");
            } else {
                Console.WriteLine("Not found");
            }
        }
    }
}