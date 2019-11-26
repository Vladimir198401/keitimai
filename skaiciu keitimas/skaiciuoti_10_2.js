
	function skaiciuoti_10_2() {
	
		res_str  = '';
		res = document.getElementById ( "rez" );			// document.getElementById - naudojam perdoti  reiksme funkcijai 
		dal = parseInt ( document.getElementById ( "antroji" ).value );
		
		i = 0;					//funkcija ( naudojamas (ATSPINDINTIS) zodis pakeciantis skaicius ar tam tikras ju reiksmes  01223456789 +  -   = / *  < > 
		
		if ( isNaN ( dal ) ) {		
													/*			tikrinam ar simbolis yra  ar nera skacius -  isNaN (dal )
													*        			 dal skaicius yra 1  jaigu tai vienas jis panaudojimas kitoi eilutei ji paminejus, jai tai ne skaicius pas mus jis cia naudojamas 
													*    			res_str =  '<span class="error">?</span>';
													*/
			//  if  - Kodas, kuri vykdo, jei sąlyga yra ivigdita	 	 else  -  kodas, kurÄ¯ vykdome, jei sÄ…lyga nera ivykdyta		if else - skirtas naudoti kai jei atitinka salyga, tada vykdoma vieną kodą, kitu atveju – kitą.
			
			res_str = '<span class="error">?</span>';		//  deze, erdve , kitems elementams atvaizdoti , class nurodo kokiaj klasei jis priklauso
			
		} else {			// else  -  kodas, kuri  vykdome, jei sąlyga nera ivykdyta
		
			while ( dal >= 2 ) {   // kol  dal yra daugiau uz 2 , ciklo funkcijos vigdomos pagal nuroditus parametrus, kai nebe , funkcija  while cikle nebevikdoma
								//ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
				
				sk =  dal % 2;    // skaiciojama liekana
			
				dal = parseInt ( dal /  2);   //   gaunama liekana, 1 arba 0  dal ...... parseInt - funkcija analizuoja eilutes  argumenta ir grazina nurodyto sveika skaiciu..  (dal/2)  dalina kol yra is ko dalint
				
				res_str = sk + res_str;   //res_str  sujungia gaunamus skaicius
				
				i++;   //teiginys vykdomas (kiekvieną kartą) ivykdzius cikla (kodo bloka), i++ padidina reiksme kaskart , kai vykdoma kilpa ( uzduodamas procesas, kaip bus panaudojus tam tikra funkcija)
			}
			
			res_str = dal + res_str + '<br>' ;    //res_str  pridieda prie gauto skaiciaus klaido jai tokia yra

								console.log ( ' dal: ' + dal );
		}

		
		res.innerHTML = res_str ;  //galutine reiksme  // galutines riksmes atspidndis ekrane (front ende) parodimas.
	}