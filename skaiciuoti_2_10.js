	
	function skaiciuoti_2_10() {
		
			res_str  = '';
			res = document.getElementById ( "rez" );			// document.getElementById - naudojam perdoti  reiksme funkcijai 
			dvl = document.getElementById ( "antroji" ).value;
			skc =0;                                   		//funkcija ( naudojamas (ATSPINDINTIS) zodis pakeciantis skaicius ar tam tikras ju reiksmes  01223456789 +  -   = / *  < > 
			kiekis = dvl.length - 1;  // paskutinto simbolio numeris
			i=0;
			suma=0;
			sk=1/2; 
		
			klaidos_poz = '';
			
			for ( i = 0; i < dvl.length; i++) {	 /*ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
										*	i=0	teiginys įvykdomas (1 karta) pries vykdant for kodu cikla . jame nustatoma kintamoji pries pradedant kilpa
										*	i < dvl.length      sakinys nustato kodo bloko vykdymo saliga , sakinis apibudina kilpos paleidimo salyga  - i - maziau uz dvl.length ( doto skaicius simboliu kiekis)
										*	i++	teiginys vykdomas (kiekvieną kartą) ivykdzius kodo bloka, i++ padidina reiksme kaskart , kai vykdoma kilpa ( uzduodamas procesas, kaip bus panaudojus tam tikra funkcija)
										*/

				sk=sk * 2;				// panaudojamas uzduotas for funkcijos procesas  sk = skaicius cikle dauginamas is dvieju , todel kad imamas is dvejetainiu naudojama nenustatita reiksme sk=1/2 poto sk=sk*2 kuri ima is
										//	turimos skaiciu  - dvl = document.getElementById ( "antroji" ).value; - (simboliu) jau suteiktos eilutes, ir panaudojimas kitoi vetoi ji paminejus..
				
				dvl_i = parseInt ( dvl [ kiekis - i ] );  /*  dvl_i - funkcija kuriai pries for cikla nebuvo suteikta reiksme, jai suteikiama reiksme naudojama is  
									kitu funkciju parseInt ( ...... ) parseInt - funkcija analizuoja eilutes  argumenta ir grazina nurodyto sveika skaiciu.. ( dvl [ kiekis - i ] )   kiekis-i tai dvl eilutes simbolio numeris */

				if ( ( ! isNaN ( dvl_i ) ) && ( dvl_i < 2 ) ) {	/*  
													*			tikrinam ar simbolis yra skaičius -  ! isNaN ( dvl_i ) - ! neigimas
													*	IR 	&&                            tarp kitko  ( dar yra ir ARBA || )
													*        			 dvl_i < 2 - skaičius yra 0 arba 1  jaigu tai nulis arba vienas jis panaudojimas kitoi eilutei ji paminejus, jai tai ne skaicius pas mus jis cia naudojamas 
													*    			klaidos_poz =  '<span class="error">?</span>';
													*/
			//  if  - Kodas, kuri vykdo, jei sąlyga yra ivigdita	  else  -  kodas, kurį vykdome, jei sąlyga nera ivykdyta		if else - skirtas naudoti kai jei atitinka salyga, tada vykdoma vieną kodą, kitu atveju – kitą.
			
					skc = dvl_i * sk;                /*
										*  			dvl_i tai 1 arba 0 kuris padauginamas is sk tai pozicijos vertes daigiklis jau pries tai funkcijoi jau kurem buvo skirtas veiksmas daugint is 2
										*			skc gaunasi gaunama reiksme dvl_i * sk , kuri ligi  pvz 1*1 0*2 1*4 0*6 1*8 0*16  daugint  is ko gaunama galutine suma
										*/
					suma += skc;			// gaunama reiksme pliusojama	
				} else {                                    

					klaidos_poz =  '<span class="error">?</span>';    //  deze, erdve , kitems elementams atvaizdoti , class nurodo kokiaj klasei jis priklauso
				}
										/*	 Isveda pranesima i interneto console. Pranesimas gali buti viena eilute
										*	(su pasirenkamomis pakaitomis) arba tai gali buti vienas ar keli javascript objektai.
										*	tai, ka parasome  i console, yra nuoroda i objekta , kuris tuomet nebutinai yra objekto verte,
										*	kai panaudojat console.log( .... ), bet tai yra objekto verte tuo metu, kai atidarote console.
										*/
				console.log ( 'dvl [ ' + ( kiekis - i ) +  ' ]: ' + dvl [ kiekis - i ] );
				console.log ( 'sk: ' + sk );    	 
				console.log ( 'skc: ' + skc );  	
				console.log ( 'suma: ' + suma );
			}		
			res_str = suma + klaidos_poz;   		//galutine reiksme   /res_str  sujungia gaunamus is atsakimo bei klaidos....  suma +  klaidos_paz 
			res.innerHTML = res_str ;    		// galutines riksmes atspidndis ekrane (front ende) parodimas
		}