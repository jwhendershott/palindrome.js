/* 
set variables 
create prompt
push input from string to array of letters
reverse array and assign to variable
test variables against each other
*/

let input = prompt("Gimme summa dat text...")
let reversedInput = ""
let inputString = input.split("");

console.log(input);
console.log(inputString);

//test variables again each other
/* function isPalindrome() {
    if (input === reversedInput) {
        alert ("Dat text is a palindrome.")
    } else {
        alert ("Dat text is not a palindrome.")
    }
} */