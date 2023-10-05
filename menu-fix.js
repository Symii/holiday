var banner_button_menu = document.querySelector('.banner-button__hld');
banner_button_menu.remove();

//var nav_primary_li = document.querySelector('.nav-primary').getElementsByClassName('is-parent')[2].getElementsByTagName("a");

function delete_mobile_menu_button()
{
    var last_menu_item_mobile = document.querySelectorAll(".mobile-nav__li");
    last_menu_item_mobile[last_menu_item_mobile.length -1].remove();
}

setTimeout(delete_mobile_menu_button, 500);