		function skaiciuoti_10_16() {
	
			res_str  = '';
			//sk_raid = [10,11,12,13,14,15];
			res = document.getElementById ( "rez" );
			dvl= document.getElementById ( "antroji" ).value;
			suma = '';
			kiekis = dvl.length;
			skaitmuo=0;
			
			var xdvl = parseInt ( dvl );
			
			console.log( 'xdvl:' + xdvl );
			
			if ( isNaN ( xdvl )) {  
				
				//suma =  xdvl;  
				
				suma = '<span class="error">?</span>';
			}
			
			while ( dvl > 0 ) {	//kol jis yra daugiau uz 16
			
				skaitmuo = parseInt (dvl /16);    //  dalinam ji  16
				skaitmuo_sk = (dvl %16);     // parkeliant 16
				
				if ( skaitmuo_sk > 9 ) {     	//jaigu daugiau uz 9					
	
					switch ( skaitmuo_sk ) {
					
						case 10: skaitmuo_skx = 'a'; break;
						case 11: skaitmuo_skx = 'b'; break;
						case 12: skaitmuo_skx = 'c'; break;
						case 13: skaitmuo_skx = 'd'; break;			//paverciam raidem arba skaicium
						case 14: skaitmuo_skx = 'e'; break;
						case 15: skaitmuo_skx = 'f'; break;						
					}
				
				} else {
				
					skaitmuo_skx  =  skaitmuo_sk;     //perdarom?
				}

				suma =  skaitmuo_skx + suma;   // suskaiciojam
				
				console.log( 'skaitmuo:' + skaitmuo );
				console.log( 'skaitmuo_sk:' + skaitmuo_sk  );
				console.log( 'skaitmuo_skx:' + skaitmuo_skx  );
				
				dvl = skaitmuo;
			}
			res_str+=suma;
			res.innerHTML=res_str;
		}
		