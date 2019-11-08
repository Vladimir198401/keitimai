
	function skaiciuoti_10_2() {
	
		res_str  = '';
		res = document.getElementById ( "rez" );			
		dal = parseInt ( document.getElementById ( "antroji" ).value );
		
		i = 0;
		
		if ( isNaN ( dal ) ) {
			
			res_str = '<span class="error">?</span>';
			
		} else {
		
			while ( dal >= 2 ) {
			
				sk =  dal % 2;
			
				dal = parseInt ( dal /  2);
				
				res_str = sk + res_str;
				
				i++;
			}
			
			res_str = dal + res_str + '<br>' ;

								console.log ( ' dal: ' + dal );
		}

		
		res.innerHTML = res_str ;
	}
