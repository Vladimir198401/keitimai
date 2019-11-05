
	function skaiciuoti() {

		res_str = '';
		res = document.getElementById ( 'rez' );
		a= document.getElementById("antroji").value;

		numerio_dalis_14 =0;
		galutine_dalis = 0;
		skaicius_hex = '';
										console.log( 'a.length: ' + a.length  );
		
		for (var i = a.length; i > 0 ;  i-=4) {
		//for (var i = 0; i <= a.length ;  i+=4) {
		
			pradzia = i - 4;
			
			if ( pradzia < 0 ) {
			
				pradzia = 0;
			}
			
			pabaiga = i ;
										console.log( 'i: ' + i  +  ' pradzia: ' + pradzia + ' pabaiga: ' + pabaiga  );
			numerio_dalis_14 = a.slice(pradzia,pabaiga);
			
			if (  ( sk_simboliu = numerio_dalis_14.length ) < 4 ) {
			
				for (var k = 0 ; k < 4- sk_simboliu;  k++ )  {
				
					 numerio_dalis_14 = '0' + numerio_dalis_14;
				}
			}
				
			eiles_numeris = numbers.indexOf ( numerio_dalis_14);
			
			if ( eiles_numeris !== -1 ) { 
			
				galutine_dalis =  chars_hex [ eiles_numeris ]; 
				
			} else {
			
				galutine_dalis = '<span class="error">?</span>';
			
			}
										console.log ( ' numerio_dalis_14: ' + numerio_dalis_14 );
										
										console.log ( '  eiles_numeris: ' + eiles_numeris );

										console.log ( '  galutine_dalis: ' + galutine_dalis );
			//skaicius_hex += galutine_dalis;
			skaicius_hex = galutine_dalis + skaicius_hex;
										console.log ( '  skaicius_hex: ' + skaicius_hex );
		}		
		res_str =skaicius_hex;
		res.innerHTML = res_str ;
	}