// AUTHOR: Diandra Andrade
// JavaScript Concept: JS Concept: sorting algorithm with bubble sort
// GITHUB: https://github.com/Diandralas


// bubble sort is comparison algorithm that every pair of adjacent values is compared, 
// and then the two values swap positions if the first value is greater than the second.
// for largest lists is not the best option.

const bubbleSort = (inputArray) => {
  let inputLength = inputArray.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < inputLength; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        let temp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const myArray = [0, 4, 22, 45, 12, 15, 17, 4, 7, 123, 55, 2, 1, 44];

console.log(bubbleSort(myArray));
