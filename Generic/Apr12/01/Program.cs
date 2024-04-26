// See https://aka.ms/new-console-template for more information

using System;
using PrimeMethods.PrimeMethods;

class Program
{
    static void Main()
    {
        Console.Write("Enter an integer: ");
        int num = Convert.ToInt32(Console.ReadLine());

        bool result = IsPrime(num);

        if (result)
            Console.WriteLine($"{num} is a prime number.");
        else
            Console.WriteLine($"{num} is not a prime number.");

        Console.ReadKey();
    }
}
