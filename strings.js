let a = "beautiful";
console.log(a.slice(5, 9));

const b = `eat `;
const food = `I was ${b} feeling hungry today`;
console.log(food);

let c = `wonderfull`;
let c1 = c.toUpperCase();
console.log(c1);

let x = "amazing";
let x1 = x.toLowerCase();
console.log(x1);

let y = `beneath`;
let y1 = y.toLowerCase();
console.log(y1);

let z = "A beautiful wedding";
z = z
  .split(" ")
  .map(
    ([firstChar, ...rest]) =>
      firstChar.toUpperCase() + rest.join("").toLowerCase()
  )
  .join(" ");
console.log(z);
