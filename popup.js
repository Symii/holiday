const viewBtn = document.querySelector(".view-modal"),
popup = document.querySelector(".popup"),
close = popup.querySelector(".close"),
field = popup.querySelector(".field"),
input = field.querySelector("#popup-input"),
copy = field.querySelector(".popup-button");

viewBtn.onclick = ()=>{
popup.classList.toggle("show");
    }
close.onclick = ()=>{
    viewBtn.click();
}

copy.onclick = ()=>{
    input.select(); //select input value
    if(document.execCommand("copy")){ //if the selected text copy
    field.classList.add("active");
    copy.innerText = "Skopiowane";
    setTimeout(()=>{
        window.getSelection().removeAllRanges(); //remove selection from document
        field.classList.remove("active");
        copy.innerText = "Skopiuj";
    }, 3000);
    }
}

input.value = "https://www.holidayhome.com.pl";