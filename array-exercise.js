var input = [
  [11, 13],
 [0, 2]
];

function array2d (input)
{
  var output = [];
  for (var j = input.length-1; j >= 0; j--) {
    output = output.concat(input[j].reverse().splice(0))
  }
  return output;
}
console.log(array2d(input));
