using System;
using System.IO;

class Result
{
    /*
     * Complete the 'factorial' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER n as parameter.
     */

    public static int factorial(int n)
    {
        // Base case: 0! = 1
        if (n == 0)
        {
            return 1;
        }

        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

class Solution
{
    public static void Main(string[] args)
    {
        // Read input from the user
        int n = Convert.ToInt32(Console.ReadLine().Trim());

        // Call the factorial function and get the result
        int result = Result.factorial(n);

        // Print the result to the console
        Console.WriteLine(result);
    }
}