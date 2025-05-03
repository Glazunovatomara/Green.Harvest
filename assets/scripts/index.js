const itemsBurger = document.querySelectorAll('.header__menu-list_item');
const checkbox = document.getElementById('burger-checkbox');
const headerBurger = document.querySelector('.header__menu-list')


function burgerClose() {
    let i = 0
    for(i; i < itemsBurger.length; i++) {
        checkbox.checked = false;
    }
}
headerBurger.addEventListener('click',burgerClose)