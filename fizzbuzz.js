function fizzbuzz(n) {
    // this const creates an empty array to store the results
    const answer = [];

    // in this for loop : while i is less or equal to n, incrementation of i by 1 after each loop iteration
    for (let i = 1; i <= n; i++) {
        // if condition to check if i is divisible both by 3 and 5, then "Fizzbuzz" is added to the answer array
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("Fizzbuzz");
        }
        // condition to check if i is divisible by 3, then "Fizz" is added to the answer array
        else if (i % 3 === 0) {
            answer.push("Fizz");
        }
        // condition to check of i is divisible by 5, then "Buzz" is added to the anwser array 
        else if (i % 5 === 0) {
            answer.push("Buzz");
        }
        // if none of the above conditions are true i converted to string is added to the answer array
        else {
            answer.push(i.toString());
        }
    }

    return answer;
}

console.log(fizzbuzz(3));

console.log(fizzbuzz(5));

console.log(fizzbuzz(15));