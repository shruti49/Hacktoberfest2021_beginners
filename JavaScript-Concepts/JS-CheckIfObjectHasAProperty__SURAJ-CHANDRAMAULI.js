let users = {
  Arin: {
    age: 21,
    online: true
  },
  Ajit: {
    age: 32,
    online: true
  },
  Suraj: {
    age: 48,
    online: true
  },
  Tanya: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Arin") &&
    userObj.hasOwnProperty("Ajit") &&
    userObj.hasOwnProperty("Suraj") &&
    userObj.hasOwnProperty("Tanya")
  ) {
    return true;
  }
  return false;
}
