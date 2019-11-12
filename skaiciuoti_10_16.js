		function skaiciuoti_10_16() {
	
			res_str  = '';
			res = document.getElementById ( "rez" );		     // document.getElementById - naudojam perdoti  reiksme funkcijai 	
			dvl= document.getElementById ( "antroji" ).value;
			suma = '';
			kiekis = dvl.length;			//funkcija ( naudojamas (ATSPINDINTIS) zodis pakeciantis skaicius ar tam tikras ju reiksmes  01223456789 +  -   = / *  < > 
			//skaitmuo='';
			
			var xdvl = parseInt ( dvl );	// xdvl kintamas = permetamas is dvl ir ligus dvl
			
			console.log( 'xdvl:' + xdvl );   
			
			if ( isNaN ( xdvl ) || ( ( xdvl + '' ) !== dvl ) ) {  
											/*		tikrinam ar simbolis yra  ar nera skacius -  isNaN (xdvl )
											*		arba jaigu xdvl ne ligu dvl iseina klaida
											*        		 xdvl skaicius yra 349  jaigu tai ne skaicius o kitas simbolis jis panaudojimas kitoi eilutei ji paminejus,
											*    		suma =  '<span class="error">?</span>';
											*/
			//  if  - Kodas, kuri vykdo, jei salyga yra ivigdita	 else  -  kodas, kurÄ¯ vykdome, jei sÄ…lyga nera ivykdyta		if else - skirtas naudoti kai jei atitinka salyga, tada vykdoma viena koda, kitu atveju kita.
			
		
				//  suma = jai suma ne ligi dvl  ji panaudojama kaip klaida
				
				suma = '<span class="error">?</span>'; //  deze, erdve , kitems elementams atvaizdoti , class nurodo kokiaj klasei jis priklauso
				
			}
			
			while ( xdvl > 0 ) {	// kol  dal yra daugiau uz 0 , ciklo funkcijos vigdomos pagal nuroditus parametrus, kai nebe , funkcija  while cikle nebevikdoma
								//ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
			
				skaitmuo_sk = (xdvl %16);     // padalinus dvl eilute i 16 perkeliama liekana likuse po 16
				
				
				
				xdvl = parseInt (xdvl /16);   // skaitmuo - funkcija kuriai pries for cikla buvo suteikta reiksme ligi 0, jai suteikiama reiksme naudojama is  kitu funkciju parseInt ( ...... ) 
				                                            //parseInt - funkcija analizuoja eilutes  argumenta ir grazina nurodyto sveika skaiciu.. (dvl/16 ] )  dvl eilutes simbolio numeris  dalinam ji  16
				
				
				
				if ( skaitmuo_sk > 9 ) {     	//  if  - Kodas, kuri vykdo, jei salyga yra ivigdita  // jaigu skaitmuo_sk  daugiau uz 9 tada swithc cikle ji yra pakeiciama i kitmasos raide priklausancia tam skaiciui
										// taip kaip pavaizdota case eilutei kitaip jis panaudojamas else kode
	
					switch ( skaitmuo_sk ) {  // kol  skaitmuo_sk  daugiau uz 9 tada swithc cikle ji yra pakeiciama i  raide priklausancia tam skaiciui
										//, ciklo funkcijos vigdomos pagal nuroditus parametrus, kai nebe , funkcija  while cikle nebevikdoma
										//ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
					
						case 10: skaitmuo_skx = 'a'; break;
						case 11: skaitmuo_skx = 'b'; break;
						case 12: skaitmuo_skx = 'c'; break;
						case 13: skaitmuo_skx = 'd'; break;			// priskiriama kaip sio atveju raides arba  kitais atvejais skaitmens reiksme, dar kitais atvejais gali but naudojami zodiai arba pavadinimai
						case 14: skaitmuo_skx = 'e'; break;
						case 15: skaitmuo_skx = 'f'; break;						
					}
				
				} else {			// else  -  kodas, kurį vykdome, jei sąlyga nera ivykdyta
				
					skaitmuo_skx  =  skaitmuo_sk;     //nuroditus skaiciaus paverciam nuroditom raidem
				}

				suma =  skaitmuo_skx + suma;   // suskaiciojam
				
				
										/*	 Isveda pranesima i interneto console. Pranesimas gali buti viena eilute
										*	(su pasirenkamomis pakaitomis) arba tai gali buti vienas ar keli javascript objektai.
										*	tai, ka parasome  i console, yra nuoroda i objekta , kuris tuomet nebutinai yra objekto verte,
										*	kai panaudojat console.log( .... ), bet tai yra objekto verte tuo metu, kai atidarote console. */
				console.log( 'xdvl:' + xdvl );
				console.log( 'skaitmuo_sk:' + skaitmuo_sk  );
				console.log( 'skaitmuo_skx:' + skaitmuo_skx  );
				
				//dvl = skaitmuo;  //  kam?  suprantu kad uzdaro cikla bet kaip?   
				
				console.log( 'suma:' + suma );
			}
			res_str+=suma;   //galutine reiksme
			res.innerHTML=res_str;  // galutines riksmes atspidndis ekrane (front ende) parodimas
		}
		