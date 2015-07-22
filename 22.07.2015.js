var input = 4;
var values = [1,1,3,4];

if (input < 5) {
    //console.log(find(values, 1)==-1);
    if (find(values, 1)== -1  || find(values, 2) == -1 ){
        console.log(-1);
    }
} else if (input >= 5 ) {
    //console.log(find(values, 5))
    
    if (!find(values, 5)){

        console.log(-1)
    };
}  

function find(arr, val) {
    
    for (var i =0; i < arr.length; i++){
        if (arr[i] == val) {
            return i
        } else if (i === arr.length) return -1; 
};
}