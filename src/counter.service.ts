/* eslint-disable prettier/prettier */
function counter(initialValue = 0) {
  let value = initialValue;

  function getCurrentValue() {
    return value;
  }

  function increaseValue() {
    value++;
  }

  return [getCurrentValue, increaseValue];
}

const [getA, nextA] = counter(1);
console.log(getA());
nextA();
console.log(getA());

const [getB, nextB] = counter(10);
nextB();
console.log(getA());
console.log(getB());

nextA();
console.log(getA());
console.log(getB());
