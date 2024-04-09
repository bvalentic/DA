using System;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        Console.WriteLine(Fibonacci(10));
    }

    public static int Fibonacci(int n, Dictionary memo = null)
    {
        if (memo == null)
        {
            memo = new Dictionary();
        }

        if (n <= 0)
        {
            return 0;
        }
        else if (n == 1)
        {
            return 1;
        }
        else if (memo.ContainsKey(n))
        {
            return memo[n];
        }
        else
        {
            int result = Fibonacci(n - 1, memo) + Fibonacci(n - 2, memo);
            memo.Add(n, result);
            return result;
        }
    }
}
