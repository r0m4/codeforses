function brothers( x, y ){
	
	if( (x == 1 || x == 2 ) & (y == 1 || y == 2 )) return 3;
	if( (x == 2 || x == 3 ) & (y == 2 || y == 3 )) return 1;
	if( (x == 3 || x == 1 ) & (y == 3 || y == 1 )) return 2;

};

//console.log(brothers( 3, 2 ));




function textFail ( text ){
	var fht = text.slice( 0, text.length / 2 );
	var sht = text.slice( text.length / 2, text.length );
	

	if ( text.length % 2 != 0 && fht == sht.slice( 0, -1 ) ) {
		return 'YES' + '\n' + sht;
	} else if ( text.length %2 != 0 && fht != sht.slice( 0, -1 ) ){
		return 'NO';
	} else if ( text.length % 2 == 0 ) {
		if ( fht + sht[ 0 ] + sht[ 1 ] == fht[ fht.length - 2 ] + fht[ fht.length - 1 ] + sht ){
			return 'YES' + '\n' + fht[ fht.length - 2 ] + fht[ fht.length - 1 ] + sht;
		} else if ( fht + sht[ 0 ] + sht[ 1 ] != fht[ fht.length - 2 ] + fht[ fht.length - 1 ] ){
			return 'NO';
		}
	}

	
	
	

	var measure1 = [];

	for( var i = 0; i < text.length; i++ ){

	}
}


console.log( textFail ( 'tatbt' ) ); 