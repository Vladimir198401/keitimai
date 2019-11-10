
	function skaiciuoti_2_16() {

		res_str = '';
		res = document.getElementById ( 'rez' );						// document.getElementById - naudojam perdoti  reiksme funkcijai 
		a= document.getElementById("antroji").value;

		numerio_dalis_14 =0;				//funkcija ( naudojamas (ATSPINDINTIS) zodis pakeciantis skaicius ar tam tikras ju reiksmes  01223456789 +  -   = / *  < > 
		galutine_dalis = 0;
		skaicius_hex = '';
										console.log( 'a.length: ' + a.length  );
		
		for (var i = a.length; i > 0 ;  i-=4) {			 /*ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
										*	i > 0	teiginys ivykdomas (kol nepasekia 0) pries vykdant for kodu cikla . jame nustatoma kintamoji kilpos pabaiga
										*	i = a.length      nustato i pradine reiksme lige simboliu skaiciui
										*	i-=4	veiksmas vykdomas (kiekviena karta) ivykdzius kodo bloka, 
										*	i-=4 pamazina i reiksme kaskart , kai vykdoma kilpa ( uzduodamas procesas, kaip bus panaudojus tam tikra funkcija)
										* 	i yra ciklo skaitiklis
										*/
		
			pradzia = i - 4;
			
			if ( pradzia < 0 ) {       // pradzia negali but maziau uz nuli , pradzia juda link galo minusojant po 4
			
				pradzia = 0;
			}
			
			pabaiga = i ; 		// taipogi ir pabaiga negali but maziau, todiel sustoja ties 0
			
										console.log( 'i: ' + i  +  ' pradzia: ' + pradzia + ' pabaiga: ' + pabaiga  );
			
			numerio_dalis_14 = a.slice(pradzia,pabaiga);     // funnkcija  numerio_dalis_14  gauna  reiksme perduota iš = a.slice(pradzia,pabaiga) o  tai duotas dvejatainius skaicius padalintas nustatito i ciklo reiksmem.
			
			if (  ( sk_simboliu = numerio_dalis_14.length ) < 4 ) {	// if   tikrinam ar funkcija ligi  sk_simboliu <4    . pries tai  sk_simboliu    priskiriamas reiksme    numerio_dalis_14.length 
		
				for (var k = 0 ; k < 4- sk_simboliu;  k++ )  {			 /*ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
															*  k yra cikslo skaitiklis,  fore naudojamos raides galimos i k ar betkokia kitokia naudojamos zimet ciklo skaitikli.
															*  var kintamasis yra globalus, k = 0  teiginys ivykdomas (1 karta) pries vykdant for kodu cikla . jame nustatoma kintamoji pries pradedant kilpa
															*	k < 4- sk_simboliu;      sakinys nustato kodo bloko vykdymo saliga , sakinis apibudina kilpos paleidimo salyga  - k- maziau uz 4- sk_simboliu; ( doto skaicius simboliu kiekis)
															*	k++	teiginys vykdomas (kiekviena karta) ivykdzius kodo bloka, k++ padidina reiksme kaskart , kai vykdoma kilpa ( uzduodamas procesas, kaip bus panaudojus tam tikra funkcija)
															* 	i yra ciklo skaitiklis  */
				
					 numerio_dalis_14 = '0' + numerio_dalis_14;               //numerio_dalis_14 nuo 1 iki 4 papildomai priskiriamas 0 kud butu surastas masive
				}
			}
				
			eiles_numeris = numbers.indexOf ( numerio_dalis_14);		//  eiles_numeris = priskiaramas eilutes simbolis kuri numbers.indexOf istraukia is  (numerio_dalis_14); 
															//	kuri  reiskia duoto skaiciaus pozicijos numeri numbers masyve
										// numbers yra simboliu masyvas, dotu simboliu eilute.. masyvas glob aliai aprasytsas, naudojamas virs fukction . pavizdi ziuret pagrindinem, pilnam faile..
									// indexOf yra metodas . funkcija priklausanti objektui vadinama  metodu , java ir javaskrypte masivas yra objektas. objektas yra domenis apjunkti su tos domenis tvarkanciomis funkcijomis
			
			if ( eiles_numeris !== -1 ) {  
													/*			tikrinam ar funkcija ligi duotam skaiciu -1 ( eiles_numeris ) - ! neigimas
													*        			eiles_numeris - skaičius yra -1 arba ligus betkokiam kitam simboliui  kuris naudojamas masyve pas mus jis cia naudojamas 
													*			galutine_dalis naudojama kai nesuranda masyve reikiamo simbolio ar jis ligus minus 1
													*    			galutine_dalis =  '<span class="error">?</span>';
													*/
			//  if  - Kodas, kuri vykdo, jei sąlyga yra ivigdita	  else  -  kodas, kurį vykdome, jei sąlyga nera ivykdyta		if else - skirtas naudoti kai jei atitinka salyga, tada vykdoma vieną kodą, kitu atveju – kitą.
			
				galutine_dalis =  chars_hex [ eiles_numeris ];      //galutine_dalis =  randa arba neranda ir jai nesurastas masyvo eiles numeris panaudojamas klaidoj
				
			} else {
			
				galutine_dalis = '<span class="error">?</span>';  //  deze, erdve , kitems elementams atvaizdoti , class nurodo kokiaj klasei jis priklauso
			
			}
										/*	 Isveda pranesima i interneto console. Pranesimas gali buti viena eilute
										*	(su pasirenkamomis pakaitomis) arba tai gali buti vienas ar keli javascript objektai.
										*	tai, ka parasome  i console, yra nuoroda i objekta , kuris tuomet nebutinai yra objekto verte,
										*	kai panaudojat console.log( .... ), bet tai yra objekto verte tuo metu, kai atidarote console. */
										console.log ( ' numerio_dalis_14: ' + numerio_dalis_14 );
										
										console.log ( '  eiles_numeris: ' + eiles_numeris );

										console.log ( '  galutine_dalis: ' + galutine_dalis );
			
			skaicius_hex = galutine_dalis + skaicius_hex;    //skaicius_hex sujungia gaunamus is klaidos bei atsakimo galutine_dalis +  skaicius_hex 
			
										console.log ( '  skaicius_hex: ' + skaicius_hex );
		}		
		res_str =skaicius_hex;		//galutine reiksme
		res.innerHTML = res_str ;		// galutines riksmes atspidndis ekrane (front ende) parodimas
	}