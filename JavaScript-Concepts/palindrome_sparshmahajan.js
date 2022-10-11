//Author Name : Sparsh Mahajan
//JAVASCRIPT CONCEPT : Palindrome Number or string
//Github : https://github.com/sparshmahajan

const isPalindrome = (str) => {
    if(typeof str !== 'string') {
        str = str.toString();
    }
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(12321));
console.log(isPalindrome(4.4));
console.log(isPalindrome('123321'));
console.log(isPalindrome('13321'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));