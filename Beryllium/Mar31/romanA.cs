public static int RomanToInt(string roman)
{
    int result = 0;
    int[] values = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
    string[] numerals = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };

    for (int i = 0; i < numerals.Length; i++)
    {
        while (roman.StartsWith(numerals[i]))
        {
            result += values[i];
            roman = roman.Substring(numerals[i].Length);
        }
    }
    return result;
}

string romanNumeral = "MCMXCIV";
int integerValue = RomanToInt(romanNumeral);
Console.WriteLine(integerValue); // Output: 1994
