public static int RomanToInt(string roman)
{
    int result = 0;

    // Dictionary to map Roman numerals to their integer values
    Dictionary<char, int> romanValues = new Dictionary<char, int>
    {
        { 'M', 1000 }, { 'D', 500 }, { 'C', 100 },
        { 'L', 50 }, { 'X', 10 }, { 'V', 5 }, { 'I', 1 }
    };

    // Iterate through the Roman numeral string in reverse
    for (int i = roman.Length - 1; i >= 0; i--)
    {
        char current = roman[i];
        int currentValue = romanValues[current];

        // If the next character is larger than the current character,
        // it means the current character is subtracted, so we add
        // its negative value to the result
        if (i > 0 && romanValues[roman[i - 1]] > currentValue)
        {
            result -= currentValue;
        }
        else
        {
            result += currentValue;
        }
    }

    return result;
}

string romanNumeral = "MCMXCIV";
int integerValue = RomanToInt(romanNumeral);
Console.WriteLine(integerValue); // Output: 1994
