var board = [8,8];
var fRect = [6,4];
var sRect = [7,5];


var sqBoard = board[0]*board[1];

var sqfRect = fRect[0] * fRect[1];
var sqsRect = sRect[0] * sRect[1]; 



console.log("sqBoard :  "+sqBoard);
console.log('sqfRect :  '+sqfRect);
console.log('sqsRect :  '+sqsRect);
 

if (sqBoard < (sqfRect+sqsRect)) {
    console.log('NO');
} else if (fRect[0] === fRect[1] || sRect[0] === sRect[1]){
    if(sqBoard/2 < sqfRect*2 || sqsRect*2 > sqBoard/2) {
        console.log('NO');
    }
} else if(minimum(fRect[0], fRect[1])+ minimum(sRect[0], sRect[1]) > maximum(board[0], board[1])) {
    console.log('NO');
} else if (maximum(fRect[0], fRect[1]) > maximum(board[0], board[1])||maximum(sRect[0], sRect[1]) > maximum(board[0], board[1])) {
    console.log('NO');
}

else console.log('YES');


function minimum(a,b){
    if (a< b) {return a} 
        else if (b<a) {return b
            } else return a;
}

function maximum(a,b) {
      if (a> b) {return a} 
        else if (b>a) {return b
            } else return a;
}
