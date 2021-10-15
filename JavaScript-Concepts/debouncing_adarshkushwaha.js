// AUTHOR: Adarsh Kushwaha
// JavaScript Concept: Debouncing
// GITHUB: https://github.com/Adarsh-kushwaha

//Debouncing in JavaScript is a practice used to improve browser performance

//func: It is the func function that we want to execute after the debounce time.

//wait: The time after the last received action that the debounce function can wait until executing func.

const debounce = (func, wait) => {  
  let timeout;  
  return function mainFunction(...args) {  
    const later = () => { 
      //Timeout: The timeout function is the value that is used to indicate a running debounce.
      clearTimeout(timeout);  
      func(...args);  
    };  
    clearTimeout(timeout);  
    timeout = setTimeout(delay, wait);  
  };  
};  
