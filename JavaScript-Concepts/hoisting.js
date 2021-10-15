var number = 10;
var display = function () {
  console.log(number);
  var number = 20;
};
display();


// The output of the above code is not 10 but it’s undefined