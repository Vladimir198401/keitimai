
	function skaiciuoti_16_2() {

		res_str = '';
		res = document.getElementById ( 'rez' );				// document.getElementById - naudojam perdoti  reiksme funkcijai 
		a= document.getElementById("antroji").value;
		klaidos_poz = '';				//funkcija ( naudojamas (ATSPINDINTIS) zodis pakeciantis skaicius ar tam tikras ju reiksmes  01223456789 +  -   = / *  < >  ir nenustatita zymima taip '' 
		suma=0;
	
		for (var i = 0; i < a.length; i++) { 	 /*ciklas ("kilpa, ratu besikartojantis"), kartojantis koda, kelis kartus ji atkartoja iki nustatitos rybos
										*	i=0	teiginys ivykdomas (1 karta) pries vykdant for kodu cikla . jame nustatoma kintamoji pries pradedant kilpa
										*	i < a.length      sakinys nustato kodo bloko vykdymo saliga , sakinis apibudina kilpos paleidimo salyga  - i - maziau uz a.length ( doto skaicius simboliu kiekis)
										*	i++	teiginys vykdomas (kiekviena karta) ivykdzius kodo bloka, i++ padidina reiksme kaskart , kai vykdoma kilpa ( uzduodamas procesas, kaip bus panaudojus tam tikra funkcija)
										* 	i yra ciklo skaitiklis
										*/


										console.log( 'a[ ' + i + '  ]: ' + a [ i ]  );
			
			k = chars_hex.indexOf ( a [ i ] );    	//  k = priskiaramas eilutes simbolis kuri chars_hex.indexOf istraukia is  ( a [ i ] ); kuri  reiskia duoto skaiciaus pozicijos numeri chars_hex masyve
										// chars_hex yra simboliu masyvas, dotu simboliu eilute.. masyvas globaliai aprasytsas, naudojamas virs fukction . pavizdi ziuret pagrindinem, pilnam faile..
									// indexOf yra metodas . funkcija priklausanti objektui vadinama  metodu , java ir javaskrypte masivas yra objektas. objektas yra domenis apjunkti su tos domenis tvarkanciomis funkcijomis
			
										console.log ( 'k: ' + k );
			
			if ( k  > -1 ) {                     	  /*  
									*			tikrinam ar simbolis yra skaičius  k daugiau uz -1
									*			IR 	&&          tarp kitko  ( dar yra ir ARBA || )
									*        			 k - skaičius yra -1 arba var chars_hex eilutes simbolis.   jaigu jis  atitinka eilutes simboli panaudojimas atsakymo reiksmei,
									*    			 jai jis ligus k -1 jis panaudojimas   klaidos_poz =  '<span class="error">?</span>';
									*/
									//  if  - Kodas, kuri vykdo, jei sąlyga yra ivigdita	if else - skirtas naudoti kai jei atitinka salyga, tada vykdoma vieną kodą, kitu atveju – kitą.
			
				
				suma += numbers [ k ] ;   // suma + sujungia gaunamus is number[k] gaunamus duotus simbolius... numbers [k] pagal eilutes simboli suranda masive dota objekta pagal eilutes simbolio numeri
				
				
								console.log ( 'numbers[' + k+ ']: ' + numbers [ k ] );
									/*	 Isveda pranesima i interneto console. Pranesimas gali buti viena eilute
									*	(su pasirenkamomis pakaitomis) arba tai gali buti vienas ar keli javascript objektai.
									*	tai, ka parasome  i console, yra nuoroda i objekta , kuris tuomet nebutinai yra objekto verte,
									*	kai panaudojat console.log( .... ), bet tai yra objekto verte tuo metu, kai atidarote console.
									*/
									
			} else {	//  else  -  kodas, kurį vykdome, jei sąlyga nera ivykdyta	
				
				klaidos_poz =  '<span class="error">?</span>'; 		 //  deze, erdve , kitems elementams atvaizdoti , class nurodo kokiaj klasei jis priklauso
			}
			res_str = suma + klaidos_poz;	//galutine reiksme
			res.innerHTML = res_str ;		// galutines riksmes atspidndis ekrane (front ende) parodimas
		}
	}