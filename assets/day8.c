using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;



class Solution
{
    public static void Main(string[] args)
    {
        // Membaca ukuran array
        int n = Convert.ToInt32(Console.ReadLine().Trim());

        // Membaca elemen array
        int[] arr = Console.ReadLine().Trim()
                         .Split(' ')
                         .Select(int.Parse)
                         .ToArray();

        // Membalikkan array dan mencetak hasil
        Console.WriteLine(string.Join(" ", arr.Reverse()));
    }
}
