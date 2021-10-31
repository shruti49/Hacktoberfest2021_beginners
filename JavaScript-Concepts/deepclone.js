function deepClone( obj) {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

// usage
/*
const a = { foo: 'bar', obj: { p: 1, q: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj

*/
