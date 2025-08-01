function isValid(str) {
    // keep looping while complete pairs to remove are found
    while (str.includes("()") || str.includes("{}") || str.includes("[]"))
        // each type of complete pair from the string zre removed
    {
        str = str.replace('()', '');
        str = str.replace('{}', '');
        str = str.replace('[]', '');
    }
    // if string is empty, all brackets were properly paired --> return true
    // if string has leftover characters --> invalid --> return false
    return str === '';
}

// example 1
const str1 = "()";
const result1 = isValid(str1);
console.log(`const str = "${str1}"`);
console.log(`returns ${result1}`);

// example 2
const str2 = "()[]{}"
const result2 = isValid(str2);
console.log(`const str = "${str2}"`);
console.log(`returns ${result2}`);

// example 3
const str3 = "(]";
const result3 = isValid(str3);
console.log(`const str = "${str3}"`);
console.log(`returns ${result3}`);;

// example 4
const str4 = "([])"
const result4 = isValid(str4);
console.log(`const str = "${str4}"`);
console.log(`returns ${result4}`);