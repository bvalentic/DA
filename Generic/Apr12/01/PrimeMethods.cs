using System;
using System.Runtime.Caching;

namespace PrimeMethods {
    public class PrimeMethods {
        static bool IsFactor(int n1, int n2)
        {
            return (n1 % n2 == 0) || (n2 % n1 == 0);
        }

        static bool IsPrime(int n)
        {
            if (n <= 1) return false;
            for (int i = 2; i * i <= n; i++)
            {
                if (n % i == 0) return false;
            }
            return true;
        }

        static bool IsPrimeImproved(int n)
        {
            if (n < 0) return false;
            for (int i = 2; i * i <= Math.Sqrt(n); i++)
            {
                if (n % i == 0) return false;
            }
            return true;
        }

        public static bool IsPrimeAnnotated(int n)
        {
            if (n < 2) return false; // 0, 1, and negative numbers are not prime
            if (n % 2 == 0) return false; // quickly check if divisible by 2

            try
            {
                int sqrt_n = Convert.ToInt32(Math.Sqrt(n));

                for (int i = 3; i <= sqrt_n; i++)
                {
                    if (n % i == 0) return false;
                }

                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine($"An error occurred: {e.Message}");
                Console.WriteLine($"Primality of {n} could not be completely determined. Returning false.");
                return false;
            }
        }

        private static Dictionary<int, bool> primeDict = [];

        public static bool IsPrimeMemoized(int n)
        {
            if (primeDict.TryGetValue(n, out bool value))
                return value;

            bool isPrime;

            if (n < 2)
                return false; // 0, 1, and negative numbers are not prime
            else if (n % 2 == 0)
                return false; // quickly check if divisible by 2

            try
            {
                int sqrt_n = Convert.ToInt32(Math.Sqrt(n));

                for (int i = 3; i <= sqrt_n; i++)
                {
                    if (n % i == 0)
                        isPrime = false;
                    break;
                }

                isPrime = true;
            }
            catch (Exception e)
            {
                Console.WriteLine($"An error occurred: {e.Message}");
                Console.WriteLine($"Primality of {n} could not be completely determined. Returning false.");
                isPrime = false;
            }

            primeDict.Add(n, isPrime);
            return isPrime;
        }

        private static ObjectCache primeCache = MemoryCache.Default;

        public static bool IsPrimeCached(int n)
        {
            string key = "prime_" + n;

            // Check if result already exists in cache
            var cachedResult = primeCache[key] as bool?;
            if (cachedResult.HasValue)
                return cachedResult.Value;

            try
            {
                int sqrt_n = Convert.ToInt32(Math.Sqrt(n));

                for (int i = 3; i <= sqrt_n; i++)
                {
                    if (n % i == 0)
                        return false;
                }

                // Add result to cache with absolute expiration
                var item = new CacheItem(key, true);
                var policy = new CacheItemPolicy();
                policy.AbsoluteExpiration = DateTime.Now.AddHours(12); // expire after 12 hours
                primeCache.Set(item, policy);

                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine($"An error occurred: {e.Message}");
                Console.WriteLine($"Primality of {n} could not be completely determined. Returning false.");

                // Add failed result to cache with shorter expiration
                var item = new CacheItem(key, false);
                var policy = new CacheItemPolicy();
                policy.AbsoluteExpiration = DateTime.Now.AddMinutes(30); // expire after 30 minutes
                primeCache.Set(item, policy);

                return false;
            }
        }
    }
}
