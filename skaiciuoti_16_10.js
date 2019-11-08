	function skaiciuoti_16_10() {
	
		res_str  = '';
		sk_raid = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
		res = document.getElementById ( "rez" );
		dvl= document.getElementById ( "antroji" ).value;
		suma = 0;
		str_suma= '';
		
		kiekis = dvl.length;
		poz16_daugikl = 1;
		
		for ( i = 0; i < kiekis; i++ ) {
		
			skaitmuo = dvl [ kiekis -1 - i ];
			
			if ( sk_raid.indexOf ( skaitmuo ) !== -1 ) {     //  skaitmuo yra raide—
			
				switch ( skaitmuo ) {
				
					case 'a': skaitmuo_sk = 10; break;
					case 'b': skaitmuo_sk = 11; break;
					case 'c': skaitmuo_sk = 12; break;
					case 'd': skaitmuo_sk = 13; break;
					case 'e': skaitmuo_sk = 14; break;
					case 'f': skaitmuo_sk = 15; break;						
				}
			
			} else {
			
				skaitmuo_sk = parseInt ( skaitmuo );   //perdarom?

			} 
			
			if ( isNaN ( skaitmuo_sk ) ) {    // ne ligu o yra ar teiginis tesa // isnan arba melas
	
				str_suma = '<span class="error">?</span>'+suma;
				suma=0;
				
			} else {
				
				suma += skaitmuo_sk * poz16_daugikl;
			}
		
			
			poz16_daugikl *= 16;			

			console.log( 'skaitmuo' + skaitmuo );
			console.log( 'skaitmuo_sk:' + skaitmuo_sk  );
			console.log( 'poz16_daugikl:' + poz16_daugikl );

		}
		str_suma=suma+str_suma;
		res_str =str_suma;
		res.innerHTML = res_str ;
	}