public static int Fibonacci(int n, Dictionary memo = null)
{
    if (n <= 0)
    {
        return 0;
    }
    else if (n == 1)
    {
        return 1;
    }
    else if (memo != null && memo.ContainsKey(n))
    {
        return memo[n];
    }
    else
    {
        int result = Fibonacci(n - 1, memo) + Fibonacci(n - 2, memo);
        if (memo != null)
        {
            memo[n] = result;
        }
        return result;
    }
}
