/*Don’t be thrown off by JavaScript parameter destructuring! It’s a common way to cleanly extract properties from objects.*/
const obj = {
  name: 'Joe',
  food: 'cake'
}

const { name, food } = obj;

console.log(name, food);
// 'Joe' 'cake'

/*If you want to extract properties under a different name, you can specify them using the following format.*/
const obj = {
  name: 'Joe',
  food: 'cake'
}

const { name: myName, food: myFood } = obj;

console.log(myName, myFood);
// 'Joe' 'cake'
