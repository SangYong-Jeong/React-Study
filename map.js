// ES5
/* var numbers = [1, 2, 3, 4, 5];

var processed = numbers.map(function (num) {
  return num * num;
});

console.log(processed); */

// ES6
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
console.log(result);

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomColor());
