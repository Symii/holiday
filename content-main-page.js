addCss('https://symii.github.io/holiday/content-main-page.css');
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
  
function delay()
{
    var el = document.createElement("div");
    el.innerHTML = '<div class="g-container"> <div class="g-image"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/Jarosawiec_90.jpg"> </div> <div class="g-text"><!--js-scroll fade-in-bottom--> <h4 class="g-headline"><label class="g-line"></label>HOLIDAY HOME</h4> <h3 class="g-title">RESORT HOLIDAY HOME CENTRUM OPIEKI I REHABILITACJI W JAROSŁAWCU</h3> <p class="g-content">Spokój, piękne otoczenie, bliskość plaży i komfortowe zakwaterowanie to jedne z wielu atrybutów, którymi wyróżnia się nasz resort SPA w Jarosławcu. Hotel położony jest w cichej okolicy w niedalekiej odległości od morza. Wygodne pokoje, życzliwy personel, pyszne posiłki i udogodnienia w postaci strefy wellness zachęcają, by wybrać to miejsce na wakacje. Organizujemy również <a href="https://www.holidayhome.com.pl/rehabilitacja/turnus-rehabilitacyjny">turnusy rehabilitacyjne</a> – ośrodek polecany jest osobom w każdym wieku. Pełniąc funkcję centrum opieki, zapewniamy kuracjuszom warunki ułatwiające powrót do dobrej formy.<br><br>Sprawdź więcej informacji dotyczących <a href="/noclegi-jaroslawiec">noclegu w Jarosławcu</a> w naszym hotelu oraz domkach.</p> </div> </div> <div class="g-container-left"> <div class="g-image-left-hidden"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/HolidayHomeSPA_078.jpg"> </div> <div class="g-text-left"><!--js-scroll fade-in-bottom--> <h4 class="g-headline"><label class="g-line"></label>SPA & WELLNESS</h4> <h3 class="g-title">Resort SPA w Jarosławcu</h3> <p class="g-content">Usytuowanie w niewielkiej odległości od ogromnej plaży Dubaj, jak i inne liczne atrakcje zachęcają, by spędzić wakacje nad morzem właśnie w naszym hotelu. Restauracja słynąca z pysznej kuchni, klimatyczny bar z wykwintnymi drinkami i przyjemna strefa SPA&Wellness  gwarantują udany pobyt. Nasz resort to odpowiednie miejsce dla rodzin z dziećmi, samotnych osób szukających wytchnienia, jak i wszystkich, którzy chcą spędzić aktywnie swoje wczasy. Dysponując odpowiednimi warunkami i doświadczonym, wyspecjalizowanym personelem udostępniamy również możliwość rezerwacji turnusu rehabilitacyjnego.<br><br>Na odwiedzających <a href="https://www.holidayhome.com.pl/hotel/o-nas">hotel w Jarosławcu</a> czeka możliwość skorzystania z jacuzzi, sauny i łaźni. Resort SPA nad morzem oferuje także masaż i zabiegi lecznicze, które pomagają wrócić do kondycji i zaznać relaksu. Zachęcamy do pobytu u nas!</p> </div> <div class="g-image g-image-left"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/HolidayHomeSPA_078.jpg"> </div> </div> <div class="g-container"> <div class="g-image"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/HolidayHomeSPA_102.jpg"> </div> <div class="g-text js-scroll fade-in-bottom"> <h4 class="g-headline"><label class="g-line"></label>KOMFORT I WYGODA</h4> <h3 class="g-title">Komfortowy hotel nad morzem</h3> <p class="g-content">W zależności od preferowanych warunków można skorzystać z opcji zakwaterowania w pokoju w klasie economy, standard, junior suit lub family room. Wystrój <a href="https://www.holidayhome.com.pl/strefa-spa">resortu SPA</a> zaaranżowany jest w nowoczesnym, minimalistycznym stylu. Pensjonariusze, spędzający wakacje nad morzem i odbywający turnusy rehabilitacyjne w Holiday Home doceniają schludną, estetyczną przestrzeń i utrzymany w obiekcie porządek. Pokoje w hotelu wyposażone są w internet i TV. W każdym z nich udostępniona jest przestronna łazienka z prysznicem oraz podstawowe akcesoria w postaci ręczników i kosmetyków hotelowych. We wszystkich apartamentach znajdują się udogodnienia, takie jak suszarka, chłodziarka i zestawy do parzenia kawy oraz herbaty.</p> </div> </div><div class="g-container-left"> <div class="g-image-left-hidden"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/Ujecie_1.jpg"> </div> <div class="g-text-left"><!--js-scroll fade-in-bottom--> <h4 class="g-headline"><label class="g-line"></label>NOWY BASEN (niedostępny w 2023 roku)</h4> <h3 class="g-title">W trakcie budowy</h3> <p class="g-content">Obecnie trwa budowa nowego basenu, który wyposażony jest w liczne dysze masujące do rehabilitacji oraz jacuzzi. W budowie jest również nowa klimatyzowana sala konferencyjna wyposażonej w najnowocześniejszy sprzęt multimedialny, sale są dla grup do 120 osób, posiadają bezprzewodowy dostęp do internetu oraz inne udogodnienia które znajdziesz <a href="/konferencje">tutaj</a>. Budowany jest także taras widokowy, siłownia i play room.</p> </div> <div class="g-image g-image-left"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/Ujecie_1.jpg"> </div> </div>';
    var div = document.getElementsByClassName("l-section--item-slider")[1];
    insertAfter(div, el);
}

setTimeout(delay, 200);


