function twoSum(numbers, target) {
    // in this first for loop (picks the first number) : 
    // while i is less than the array length, incrementation of i by 1 after each loop iteration
    for (let i = 0; i < numbers.length; i++) {
        // in this second loop (picks the second number) : start from i + 1 to avoid using the same element twice,
        // while j is less than the array length, incrementation of j by 1 after each loop iteration
        for (let j = i + 1; j < numbers.length; j++) {
            // if conditions to check if the current pair adds up to the target
            if (numbers[i] + numbers[j] === target) {
                // if it adds up, return index of the first number and index of the second number
                return [i, j];
                // if this pair doesn't work -> next iteration
                // the loop will automatically try the next combination
            }
        }
    }
    // if all possible pairs have been checked and no combination works, return an empty array
    return [];
}

// example 1
const numbers1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Example 1:", twoSum(numbers1, target1));
console.log("Explanation: numbers1[0] + numbers1[1] = 2 + 7 = 9");

// example 2
const numbers2 = [3, 2, 4];
const target2 = 6;
console.log("Example 2:", twoSum(numbers2, target2));
console.log("Explanation: numbers2[1] + numbers2[2] = 2 + 4 = 6");

// example 3
const numbers3 = [3, 3];
const target3 = 6;
console.log("Example 3:", twoSum(numbers3, target3));
console.log("Explanation: numbers3[0] + numbers3[1] = 3 + 3 = 6");