// Add your functions here
// WHY DOES THIS NOT PASS THE TESTS????!!!!
function map(arr, operation) {
  arrNew = []
  for (let element of arr) {
    arrNew.push(operation(element))
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



// WHY DOES THIS NOT PASS THE TESTS????!!!!
// function mapLike(arr, operation = function(x) {return x}) {
//   arrNew = []
//   for (let i = 0; i < arr.length; i++) {
//     arrNew[i] = operation(arr[i])
//   }
//   return arrNew
// }
// BUT THIS PASSES!!

function mapToNegativize(sourceArray) {
  return mapLike(sourceArray, function(x){return x * -1})
}

// function mapToNoChange(sourceArray) {
//   return mapLike(sourceArray)
// }

// function mapToDouble(sourceArray) {
//   return mapLike(sourceArray, function(x) {return x*2})
// }

// function mapToSquare(sourceArray) {
//   return mapLike([...sourceArray], function(x) {return x*x})
// }


// function reduceLike(arr, startingPoint, operation = function(x) {return x}) {
//   for (let i = 0; i < arr.length; i++) {
//     startingPoint = operation(startingPoint, arr[i])
//   }
//   return startingPoint
// }

// function reduceToTotal(sourceArray, startingPoint = 0) {
//   const total = function(sp, arrElement){return sp + arrElement}
//   return reduceLike(sourceArray, startingPoint, total)
// }

// function reduceToAllTrue(sourceArray) {
//   const checkAllTrue = function (sp, arrElement) {return sp && !!arrElement}
//   return reduceLike(sourceArray, true, checkAllTrue)
// }

// function reduceToAnyTrue(sourceArray) {
//   const checkAllTrue = function (sp, arrElement) {return sp || !!arrElement}
//   return reduceLike(sourceArray, false, checkAllTrue)
// }