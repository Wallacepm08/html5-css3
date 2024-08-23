let ints = [1, 2, 3, 4, 5, 6, 7];

console.log(ints.copyWithin(1, 6, 7));

function add(a) {
  return function (b) {
    console.log("a" + a + "+ b" + b);
    return a + b;
  };
}

let y = add(3);

console.log("y" + y);

let x = y(7);

console.log(x);
