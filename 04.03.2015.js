function rand (length){
    var str = '';
    var ggg = '*.*.*.*.*.*.*.*.'
    for (var i = 0; i < length; i++){
        var r = Math.floor(Math.random()*16);
        str+=ggg[r]; 
    }
    return str;   
}


var st = rand(25)
console.log( st);


var line  = st;


function jumps (isl, length, line){
    var startPos = line.indexOf('*');
    
    var con = 0;
    for (var i = startPos; i < line.length; i+=length){
        if(line[i]!='*'){
            
            break;
        } else {
        
            con+=1;
        };
    }

    if (con>=isl){
        console.log('yes');
    }else
        console.log('no');
    
}

jumps(5, 2, line);
jumps(5, 3, line);
jumps(5, 4, line);
jumps(5, 5, line);