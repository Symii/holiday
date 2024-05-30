// Funkcje ciasteczek
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    console.log(`Set cookie: ${name}=${value}; expires=${expires}`);
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
    console.log(`Erased cookie: ${name}`);
}

// Funkcja do zmiany rozmiaru czcionki
function changeFontSize(factor) {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    const newSize = currentSize + factor;
    body.style.setProperty('font-size', newSize + 'px', 'important');
    setCookie('fontSize', newSize, 7);  // Zapisz nowy rozmiar czcionki w ciasteczkach na 7 dni
}

// Funkcje do zwiększania i zmniejszania rozmiaru czcionki
function increaseFontSize() {
    changeFontSize(2);  // Zwiększ o 2px
}

function decreaseFontSize() {
    changeFontSize(-2);  // Zmniejsz o 2px
}

// Funkcje do zmiany kontrastu kolorów
function highContrast() {
    document.body.style.color = '#FFFFFF';
    document.body.style.backgroundColor = '#000000';
    setCookie('color', '#FFFFFF', 7);
    setCookie('backgroundColor', '#000000', 7);
}

function normalContrast() {
    document.body.style.color = '#000000';
    document.body.style.backgroundColor = '#FFFFFF';
    setCookie('color', '#000000', 7);
    setCookie('backgroundColor', '#FFFFFF', 7);
}

// Funkcja do zmiany rodziny czcionek
function changeFontFamily(fontFamily) {
    document.body.style.fontFamily = fontFamily;
    setCookie('fontFamily', fontFamily, 7);  // Zapisz nową rodzinę czcionek w ciasteczkach na 7 dni
}

// Funkcja do ładowania ustawień z ciasteczek
function loadSettings() {
    const fontSize = getCookie('fontSize');
    const color = getCookie('color');
    const backgroundColor = getCookie('backgroundColor');
    const fontFamily = getCookie('fontFamily');

    console.log(`Loaded settings - fontSize: ${fontSize}, color: ${color}, backgroundColor: ${backgroundColor}, fontFamily: ${fontFamily}`);

    if (fontSize) {
        document.body.style.fontSize = fontSize + 'px';
    }
    if (color && backgroundColor) {
        document.body.style.color = color;
        document.body.style.backgroundColor = backgroundColor;
    }
    if (fontFamily) {
        document.body.style.fontFamily = fontFamily;
    }
}

function displayOptions() {
    const element = document.getElementById('wcag-options');
    const computedStyle = window.getComputedStyle(element);
    const displayValue = computedStyle.getPropertyValue('display');

    const buttonElement = document.getElementById('wcag-button');

    console.log('Wartość display:', displayValue);

    if(displayValue == "none") {
        document.getElementById('wcag-options').style.display = "block";
        buttonElement.classList.add('shadow');
    } else {
        document.getElementById('wcag-options').style.display = "none";
        buttonElement.classList.remove('shadow');
    }
}

// Załaduj ustawienia przy ładowaniu strony
window.onload = loadSettings;


document.addEventListener('click', function(event) {
    var container = document.querySelector('.wcag-container');
    var targetElement = event.target; // Element, który został kliknięty
  
    // Sprawdź czy kliknięcie nastąpiło poza .wcag-container
    if (!container.contains(targetElement)) {
      const checkbox = document.getElementById('toggle');
      if(checkbox.checked == false) {
        checkbox.checked = true;
      } 
    }
  });