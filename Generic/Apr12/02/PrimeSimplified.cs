using System;
using System.Runtime.Caching;

namespace PrimeSimplified {
    public class PrimeSimplified {
        public static bool IsPrime(int n)
        {
            if (n < 2) return false; // 0, 1, and negative numbers are not prime
            if (n % 2 == 0) return false; // quickly check if divisible by 2

            int sqrt_n = Convert.ToInt32(Math.Sqrt(n));

            for (int i = 3; i <= sqrt_n; i++)
            {
                if (n % i == 0) return false;
            }

            return true;
        }
    }
}