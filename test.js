
var board = [8,8];
var fRect = [6,4];
var sRect = [7,5];


var sqBoard = board[0]*board[1];

var sqfRect = fRect[0] * fRect[1];
var sqsRect = sRect[0] * sRect[1]; 



console.log("sqBoard :  "+sqBoard);
console.log('sqfRect :  '+sqfRect);
console.log('sqsRect :  '+sqsRect);


console.log(Math.pow((sqfRect + sqsRect),2)); 

console.log(Math.pow((sqfRect),2) + 2*(sqfRect*sqsRect) + Math.pow(sqsRect,2));

