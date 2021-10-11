// AUTHOR: ASLManasa
// JavaScript Concept: Error Handling
// GITHUB: https://github.com/ASLManasa
try {
  non_Existing_Function();
} catch (error) {
  console.log(error.name + ":" + error.message);
}
// The function non_Existing_Function doesnt exist . hence there will be an error. Hence we are printing
// the error message

function test_function() {
  try {
    return 1;
  } catch (error) {
    return 2;
  } finally {
    return 3;
  }
}
console.log(test_function());
// the code will print 1 and 3 since there is no error in the code .
// finally executes after try and catch . It executes even if there is an error.
