function vasya( rating ){
	var count = 0;
	var precount = 0;

	for( var i = 0; i < rating.length; i++ ){
		if( rating[i] > 3 ){
			precount++;
		} else precount = 0;
		if ( precount == 3 ){
			count++;
			precount = 0;
		}
	}
	return count;
}

//console.log( vasya( [ 1, 5, 4, 5, 2, 4, 4, 5, 5, 4, 3, 4, 5, 5 ] ) );


function stars( x, y, map ){
	if( map.length < 3 ){
		if( map.length == 1 ){ return 1}

		if(map[0] == '*' & map[1] == '*') { return 2 } else return 1;

	};

	var dimensionX = 0;
	var dimensionY = 0;
	
	var sideX = 0;
	var sideY = 0;
	var storeObjX = [];
    var storeObjY = [];

	
	//основной код  
	//x измерение
	for(var d = 0; d < map.length; d = d + y){
		dimensionX++;

		for( var i = d; i <= y + d; i++ ){
						
			if( map[i] == '*' ){ 
				storeObjX.push(dimensionX );
				
			}			
			
		}
	}

	//y измерение
	for(var e = 0; e < y; e++){
		dimensionY = e;

		for(var z = e; z < map.length; z = z + y){
			if( map[z] == '*'){ 
				storeObjY.push(dimensionY );
			}			
			
		}
		
	}

	function maxArray(numArray) {
 		return Math.max.apply(null, numArray);
	}

	function minArray(numArray) {
 		return Math.min.apply(null, numArray);
	}	
	
	var minY = minArray(storeObjY);
	var maxY = maxArray(storeObjY);

	for(var n = minY; n <= maxY; n++){
		sideY++;
	}

	var minX = minArray(storeObjX);
	var maxX = maxArray(storeObjX);

	for(var f = minX; f <= maxX; f++){
		sideX++
	}
	      
	return ((sideX > sideY) ?  sideX : sideY);
    
}

console.log( stars( 2, 1, '.*' ) )