//Author: Jaydeep Kumar Silawat
//JavaScript Concept:  Memoization in JavaScript.
//GITHUB: https://github.com/jayyuuuu



//Memoization is a programming technique that attempts to increase a function’s performance by caching its previously computed results.


const memoizedAdd = () => {
        let cache = {};
        return (value) => {
            if (value in cache) {
                console.log('Fetching from cache');
                return cache[value];
            } else {
                console.log('Calculating result');
                let result = value + 10;
                cache[value] = result;
                return result;
            }
        }
    }
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); //output: 19 calculated
console.log(newAdd(9)); //output: 19 cached
