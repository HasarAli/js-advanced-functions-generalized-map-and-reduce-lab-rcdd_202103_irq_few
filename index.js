// Add your functions here
// WHY DOES THIS NOT PASS THE TESTS????!!!!
function mapLike(arr, operation = function(x) {return x}) {
  arrNew = []
  for (let i = 0; i < arr.length; i++) {
    arrNew[i] = operation(arr[i])
  }
  return arrNew
}
// BUT THIS PASSES!!

// function map(arr, operation = function(x) {return x}) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = operation(arr[i])
//   }
//   return arr
// }


function reduce(arr, startingPoint, operation = function(x) {return x}) {
  for (let element of arr) {
    startingPoint = operation(startingPoint, element)
  }
  return startingPoint
}