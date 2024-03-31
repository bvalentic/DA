// Response A

function areAnagrams(string1, string2) {
    // Check if both strings have the same length
    if (string1.length !== string2.length) return false;
    
    // Create an object to store character counts
    const charCount = {};
    
    // Convert both strings to lowercase and count their characters
    for (let char of string1.toLowerCase()) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of string2.toLowerCase()) {
      charCount[char] = (charCount[char] || 0) - 1;
    }
    
    // Check if all character counts are zero
    for (let key in charCount) {
      if (charCount[key] !== 0) return false;
    }
    
    // If all character counts are zero, the strings are anagrams
    return true;
}

const string1 = "hello";
const string2 = "olleh";
console.log(areAnagrams(string1, string2)); // Output: true

// Response B

function isAnagram(str1, str2) {
    // Sort both strings
    let arr1 = str1.split('').sort();
    let arr2 = str2.split('').sort();
  
    // Check if both sorted strings are equal
    return arr1.join('') === arr2.join('');
}

const string3 = "world";
const string4 = "dlrow";
console.log(areAnagrams(string3, string4)); // Output: true
