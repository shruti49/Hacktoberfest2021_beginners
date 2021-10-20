// AUTHOR: Kushgara
// JavaScript Concept: recurtion using Dynamic programming
// GITHUB: https://github.com/Kushagra1974 

//Add your JavaScript concept below
// Dynamic programming is used to reduce the time complexity of a
//recurtive program by using result of previous function cal
//for eg in Fibonacci sequence f(n) = f(n-1) + f(n-2)
//if we want to calculate fib(3) then by above formula we have to call
//fib(2) and fib(1) ,and to calculate fib(2) we need to call fib(1) and fib(0)
//as we need to call fib(2) two time if we can store fib(2) it will be afficient

function fib(n) {
    let arr = [];
    if (n == 1 || n == 0) return n;
    if (arr[n] != null) {
        return arr[n];
    }
    else {
        arr[n] = fib(n - 1) + fib(n - 2);
    }
    return arr[n];
}
console.log(fib(4));

//this uses linear time and linear space this could be improve even
//furthur so that program uses linear time and constant space