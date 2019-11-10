	function skaiciuoti_16_10() {
	
		res_str  = '';
		sk_raid = [ 'a', 'b', 'c', 'd', 'e', 'f' ];           //  funkcios simboliu eilute
		res = document.getElementById ( "rez" );			 // document.getElementById - naudojam perdoti  reiksme funkcijai 
		dvl= document.getElementById ( "antroji" ).value;
		suma = 0;						
		str_suma= '';    					//funkcija ( naudojamas (ATSPINDINTIS) zodis pakeciantis skaicius ar tam tikras ju reiksmes  01223456789 +  -   = / *  < > ''
		
		kiekis = dvl.length;  // kiekis = tai perkeliama reiksme is dvl.length  tai  doto skaiciaus simboliu eilute
		poz16_daugikl = 1;	//  funkcija ligu
		
		for ( i = 0; i < kiekis; i++ ) {			/*ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
										*	i=0	teiginys ivykdomas (1 karta) pries vykdant for kodu cikla . jame nustatoma kintamoji pries pradedant kilpa
										*	i <  kiekis     sakinys nustato kodo bloko vykdymo saliga , sakinis apibudina kilpos paleidimo salyga  - i - maziau uz kiekis ( doto skaicius simboliu kiekis)
										*	i++	teiginys vykdomas (kiekviena karta) ivykdzius kodo bloka, i++ padidina reiksme kaskart , kai vykdoma kilpa ( uzduodamas procesas, kaip bus panaudojus tam tikra funkcija)
										* 	i  yra ciklo skaitiklis
										*/

		
			skaitmuo = dvl [ kiekis -1 - i ];		// kad isgauti reikiama skaiciu is dvl, dvl priskiariamas eiles nr su funkcija (  [ kiekis -1 - i ] )   
			
			if ( sk_raid.indexOf ( skaitmuo ) !== -1 ) {     // jai  skaitmuo yra raide arba skaicius  ir neligi -1 ji perduodama toliau ir funkcijos cikle switch pakeiciama skaiciumi
				
				
				//	if (  ( sk_simboliu = numerio_dalis_14.length ) < 4 ) {	// if   tikrinam ar funkcija ligi  sk_simboliu <4    . pries tai  sk_simboliu    priskiriamas reiksme    numerio_dalis_14.length 
				
				//if ( eiles_numeris !== -1 ) {  
													/*			tikrinam ar funkcija ligi duotam skaiciu -1 ( eiles_numeris ) - ! neigimas
													*        			eiles_numeris - skaicius yra -1 arba ligus betkokiam kitam simboliui  kuris naudojamas masyve pas mus jis cia naudojamas 
													*			galutine_dalis naudojama kai nesuranda masyve reikiamo simbolio ar jis ligus minus 1
													*    			galutine_dalis =  '<span class="error">?</span>';
													*/
				/* if ( ( ! isNaN ( dvl_i ) ) && ( dvl_i < 2 ) ) {	/*  
													*			tikrinam ar simbolis yra skaicius -  ! isNaN ( dvl_i ) - ! neigimas
													*	IR 	&&                            tarp kitko  ( dar yra ir ARBA || )
													*        			 dvl_i < 2 - skaicius yra 0 arba 1  jaigu tai nulis arba vienas jis panaudojimas kitoi eilutei ji paminejus, jai tai ne skaicius pas mus jis cia naudojamas 
													*    			klaidos_poz =  '<span class="error">?</span>';
													*/
				
				
			
				switch ( skaitmuo ) {			 // kol  skaitmuo  ligus raidei tada swithc cikle ji yra pakeiciama i  skaiciu priklausanciam tam skaiciui
										//, ciklo funkcijos vigdomos pagal nuroditus parametrus, kai nebe , funkcija  while cikle nebevikdoma
										//ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
				
					case 'a': skaitmuo_sk = 10; break;
					case 'b': skaitmuo_sk = 11; break;
					case 'c': skaitmuo_sk = 12; break;		// priskiriama raides arba kaip sio atveju skaitmens reiksme, kitais atvejais gali but naudojami zodiai arba pavadinimai
					case 'd': skaitmuo_sk = 13; break;
					case 'e': skaitmuo_sk = 14; break;
					case 'f': skaitmuo_sk = 15; break;						
				}
			
			} else {		// else  -  kodas, kuri  vykdome, jei salyga nera ivykdyta
			
				skaitmuo_sk = parseInt ( skaitmuo );   //perdarom? nuroditas raides, paverciam nuroditais skaiciais

			} 
			
			if ( isNaN ( skaitmuo_sk ) ) {  
				
				str_suma = '<span class="error">?</span>'+suma;
					suma=0;								/* tikrinam ar simbolis yra  skacius -  isNaN (skaitmuo_sk) jai jis nera skaicius mes ji panaudojam str_suma kitokiu atveju 
														*    perduodama i else - koda
														*  res_str =  '<span class="error">?</span>';  */
				//  if  - Kodas, kuri vykdo, jei salyga yra ivigdita	  else  -  kodas, kurį vykdome, jei sąlyga nera ivykdyta		if else - skirtas naudoti kai jei atitinka salyga, tada vykdoma viena koda, kitu atveju kita.
				
				
			} else {     //else  -  kodas, kuri vykdome, jei salyga nera ivykdyta,  jai if yra skaicius
				
				suma += skaitmuo_sk * poz16_daugikl;      // suma sudeda ir pliusoja gauta suma is gauto skaitmens kiris dauginamas is pozicijos daugiklio 1*16*16(2)kvadratu+5*16(1) +13(0) =349
			}
		
			
			poz16_daugikl *= 16;	// poz16_daugikl = 16*16		

			console.log( 'skaitmuo' + skaitmuo );
			console.log( 'skaitmuo_sk:' + skaitmuo_sk  );
			console.log( 'poz16_daugikl:' + poz16_daugikl );

		}
		str_suma=suma+str_suma;       
		res_str =str_suma;			 //galutine reiksme
		res.innerHTML = res_str ;		 // galutines riksmes atspidndis ekrane (front ende) parodimas
	}