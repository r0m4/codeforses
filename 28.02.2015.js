var arr = [['r','n','b','q','k','b','n','r'],
           ['p','p','p','p','p','p','p','p'],
           ['.','.','.','.','.','.','.','.'],
           ['.','.','.','.','.','.','.','.'],
           ['.','.','.','.','.','.','.','.'],
           ['.','.','.','.','.','.','.','.'],
           ['P','P','P','P','P','P','P','P'],
           ['R','N','B','Q','K','B','N','R']];

var table = {
            q:9,
            b:5,
            r:3,
            n:3,
            p:1,
            k:0
}


var whiteCount = 0;
var blackCount = 0;
for (var i = 0; i < arr.length; i++){
    
    for (var t = 0; t < arr[i].length; t++){
        
        if(arr[i][t]==='.'){break;
        
        }else if(arr[i][t]===arr[i][t].toUpperCase()){
            var sign = arr[i][t];
            
            for(var key in table){
              if(sign.toLowerCase()===key){
                whiteCount += table[key];
              }
              
            }
        }else if(arr[i][t]===arr[i][t].toLowerCase()){
          var sign2 = arr[i][t];
            
            for(var key in table){
              if(sign2===key){
                blackCount += table[key];

              }
              
            }
        }

    }
}

function quickCompare (){
  if (whiteCount>blackCount){
    console.log('White');
  } else if(blackCount > whiteCount){
    console.log ('Black')
  }else console.log ('draw');
}

quickCompare();
//console.log(count);
