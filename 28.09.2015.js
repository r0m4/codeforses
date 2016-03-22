


function countPairs(red, blue){
    var redCount = 0;
    var blueCount = 0;
    var pairs = 0;
    var output = 0;
    (red>blue) ? redCount = (red - blue) : blueCount = (blue - red);
    (red>blue) ? pairs = blue : pairs = red;
    (red>blue) ? output = redCount : output = blueCount;

    return ("amount of pairs is: "+pairs+" one color is: "+Math.floor(output/2));
}

var house = 5;
var internal = [1, 2, 3,1,2];
var output = [];

function floors (house, arr) {
    var topHouse = 0;
    var topHousePos = 0;
        
        if(house<2){
            for ( var i = 0; i < arr.length; i++){
                    if(internal[i]>topHouse){
                        topHouse=internal[i]
                        topHousePos = i;
                    };
                };
            for ( var i = 0; i < topHousePos; i++){
                    output.push((topHouse+1)-arr[i]);
                };

            for (var i = topHousePos; i<arr.length; i++){
                output.push(topHouse-arr[i]);
            };

            console.log(output);


        };

        if(house > 2){
            var sections = Math.floor(house / 3);
             
                for ( var i = 0; i < arr.length; i++){
                    if(internal[i]>topHouse){
                        topHouse=internal[i]
                        topHousePos = i;
                    };
                };

                for ( var i = 0; i < topHousePos; i++){
                    output.push((topHouse+1)-arr[i]);
                };

                for ( var i = topHousePos; i<topHousePos+sections; i++){
                    output.push(topHouse-arr[i]);
                };

                for ( var i = topHousePos+sections; i < arr.length; i++) {
                    if(arr[i]>=topHouse){
                        output.push(topHouse-arr[i]);
                        continue;
                    }
                    output.push((topHouse-1)-arr[i]);
                }
                    

                return (output);
            };
        };



var skils = 3;
var points = 8;
var lvls = [17,15,19]; 



    
    function bubble(arr){
        
        arr.sort(function(a,b){if(a>b) { return -1}else return 1});
        
        var midArr ; 
        
        if(arr.length%2===0){
            midArr=arr.length/2
        } else midArr=Math.ceil(arr.length/2);
        
        var frstHalf =arr.slice(0, midArr);
        var scndHalf =arr.slice(midArr, arr.length).sort(function(a,b){if(a<b){return -1}else return 1});
        var output = [];
        

        for (var i =0; i < frstHalf.length; i++){
            
            output.push(frstHalf[i],(scndHalf[i]));            
        }
        
        
        output.forEach(function(item,i,arr){
            if (item === undefined){
                arr.splice(i,1)                
            }
        })
        
        
        

        
        var ans= 0;
        for (var i=0; i< output.length; i++){
            if(points===0){break};
            var line = output[i].toString();
            
            //console.log(line[line.length-1]);
            var v = parseInt(line[line.length-1]);
            ans = ans +1;
            var t=10-v;
            for (k=0; k<t; k++){
                    if(points===0){break};
                
                    points = points -1;
                    //console.log("points", points)
                    
            }
        }
        return("ans",ans)

    }

    console.log("test :  ", bubble(lvls));
    


