function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const bannerOffers = [
  {
    start: "2025-12-01",
    end: "2025-12-26",
    html: `🌟 Świąteczna magia nad morzem! Zarezerwuj wyjątkowy pobyt w naszym hotelu i poczuj klimat Bożego Narodzenia. <a href=\"/swieta-boze-narodzenie-hotel-jaroslawiec-2025-2026\">Zobacz ofertę</a>`,
    style: "background-color: #bfaa89;",
  },
  {
    start: "2025-12-27",
    end: "2026-01-03",
    html: `✨ Powitaj Nowy Rok nad morzem! Sprawdź naszą wyjątkową ofertę sylwestrową. <a href=\"/sylwester-jaroslawiec-2025-2026\">Sprawdź szczegóły</a>`,
    style: "background-color: #3b5998;",
  },
];

function isDateInRange(date, start, end) {
  const d = new Date(date);
  const endDate = new Date(end);
  endDate.setHours(23, 59, 59, 999);
  return d >= new Date(start) && d <= endDate;
}

function getCurrentOffer() {
  const today = new Date();
  return bannerOffers.find((o) => isDateInRange(today, o.start, o.end));
}

window.closeBanner = function () {
  const banner = document.getElementById("sticky-holiday-banner");
  if (banner) {
    banner.style.display = "none";
    localStorage.setItem("bannerClosedAt", Date.now());
  }
};

function showBanner() {
  const lastClosed = localStorage.getItem("bannerClosedAt");
  //if (lastClosed && Date.now() - Number(lastClosed) < 3600000) return;

  const offer = getCurrentOffer();
  if (!offer) return;

  const banner = document.getElementById("sticky-holiday-banner");
  if (!banner) return;

  banner.innerHTML = `
    <span>${offer.html}</span>
    <span 
      class="close-btn" 
      onclick="closeBanner()"
      style="
        cursor: pointer; 
        font-size: 22px; 
        margin-left: 20px; 
        line-height: 1;
        color: #fff;
      "
    >&times;</span>
  `;

  banner.style.cssText = `
    ${offer.style || "background-color: #bfaa89;"} 
    color: #fff; 
    padding: 15px 25px; 
    border-radius: 12px; 
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    width: 80%; 
    max-width: 900px; 
    font-size: 16px;
    animation: fadeIn 0.4s ease-out;
  `;

  banner.style.display = "flex";
}

function delay() {
  if (!document.body || !document.head) {
    setTimeout(delay, 50);
    return;
  }

  const bannerHTML = `
    <div 
      class="sticky-banner-wrapper"
      style="
        position: sticky; 
        top: 30px; 
        width: 100%; 
        display: flex; 
        justify-content: center; 
        z-index: 9999;
      "
    >
      <div id="sticky-holiday-banner" style="display: none;"></div>
    </div>
  `;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = bannerHTML;
  const bannerWrapper = tempDiv.firstElementChild;

  document.body.prepend(bannerWrapper);

  const style = document.createElement("style");
  style.innerHTML = `
    #sticky-holiday-banner a {
        color: #fff;
        font-weight: bold;
        text-decoration: underline;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    #sticky-holiday-banner {
        animation: fadeIn 0.4s ease-out;
    }
    body {
        margin-top: 0 !important; 
    }
  `;
  document.head.appendChild(style);

  showBanner();
}

setTimeout(delay, 400);
