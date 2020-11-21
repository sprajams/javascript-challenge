// Clean the room function: given an input of
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into
// individual array that is ordered.
// For example answer(ArrayFromAbove) should return :
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].

// Bonus: Make it so it organizes strings differently
// from number types.i.e.[1, "2", "3", 2] should return
// [ [1, 2], ["2", "3"]]

//sort, lowers to highest
let arrSort = arr.sort((a,b) => a-b);
console.log(arrSort);

let prevNum = arrSort[0]
let currArr = [prevNum];
let result = []  
  
 for (i = 1; i < arrSort.length; i++) {
      if (prevNum === arrSort[i]) {
     currArr.push(prevNum);
      } else {
      result.push(currArr);
      prevNum = arrSort[i];
      currArr = [prevNum];
      }
    }
result.push(currArr);

console.log(result);
