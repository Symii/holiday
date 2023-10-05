addCss('https://owncraft.eu/style/content-main-page.css');

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
  
var el = document.createElement("div");
el.innerHTML = '<div style="background: none;" class="g-container"> <h3 style="width:70%;margin:0 auto;text-align:center;">Szukasz pewnego noclegu w Jarosławcu? Mamy do zaoferowania noclegi w domkach oraz w hotelu.</h3> </div> <div style="background: none;" class="g-container"> <div class="g-image"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/HolidayHomeSPA_102.jpg"> </div> <div class="g-text js-scroll fade-in-bottom"> <h4 class="g-headline"><label class="g-line"></label>HOTEL HOLIDAY HOME JAROSŁAWIEC</h4> <h3 class="g-title">Nocleg w komfortowym hotelu w Jarosławcu</h3> <p class="g-content">W zależności od preferowanych warunków można skorzystać z opcji zakwaterowania w pokoju w klasie economy, standard, junior suit lub family room. Wystrój <a href="https://www.holidayhome.com.pl/strefa-spa">resortu SPA</a> zaaranżowany jest w nowoczesnym, minimalistycznym stylu. Pensjonariusze, spędzający wakacje nad morzem i odbywający turnusy rehabilitacyjne w Holiday Home doceniają schludną, estetyczną przestrzeń i utrzymany w obiekcie porządek. Pokoje w hotelu wyposażone są w internet i TV. W każdym z nich udostępniona jest przestronna łazienka z prysznicem oraz podstawowe akcesoria w postaci ręczników i kosmetyków hotelowych.</p> </div> </div> <div style="background: none;" class="g-container-left"> <div class="g-image-left-hidden"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/Jarosawiec_53.jpg"> </div> <div class="g-text-left"> <h4 class="g-headline"><label class="g-line"></label>DOMKI DUETDOMKI JAROSŁAWIEC</h4> <h3 class="g-title">Nocleg w domkach letniskowych</h3> <p class="g-content"><a href="https://duetdomki.pl/" target="_blank">Domki letniskowe</a> to miejsce na rodzinne wakacje, położone w Jarosławcu niewielkiej miejscowości rekreacyjno-wypoczynkowej. Nasz ośrodek znajduje się 700 m. od morza i oferujemy Państwu 11 domków letniskowych z Jacuzzi  i  w pełni wyposażonymi kuchniami. Domki przeznaczone są dla rodzin w zależności od wybranej oferty. Dołożymy wszelkich starań aby nasz ośrodek był dla Państwa miejscem wyjątkowym, pełnym ciepłej atmosfery, gościnności i spokoju.</p> </div> <div class="g-image g-image-left"> <img src="https://u.profitroom.com/2018.holidayhome.com.pl/uploads/przeskalowane_do_strony/Jarosawiec_53.jpg"> </div> </div>';
var div = document.querySelector(".l-section--contact");

if(div == null) {
    div = document.querySelector(".l-section--offers-listing");
}

if(div == null) {
    div = document.querySelector(".l-section--rooms-listing");
}

insertAfter(div, el);