function diagonalDifference(arr) {
 
 let diagnalLeft = 0;
 let diagnalRight= 0;

 for (let i= 0; i < arr.length; i++){
  diagnalLeft += arr[i][i]
 }

 for (let j= 0, k= arr.length - 1; j < arr.length; j++, k--){
  diagnalRight += arr[j][k];
 }
 let difference = diagnalLeft - diagnalRight;
 let absoluteValue = Math.abs(difference);

return absoluteValue;
}

const arrOne = [
[1,10,2,3],
[20,3,30,4],
[2,40,1,4],
[1,2,3,4]
]

diagonalDifference(arrOne)

