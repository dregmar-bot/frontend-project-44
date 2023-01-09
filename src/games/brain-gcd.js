export const askGCD = () => console.log('Find the greatest common divisor of given numbers.');
export const takeGCD = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (y !== 0 && x !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  x += y;
  return x.toString();
};
