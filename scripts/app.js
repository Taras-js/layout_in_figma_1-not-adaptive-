// Логика открытия и закрытия меню

const buttonClickBurger = document.querySelector('.wrap');
let menuHtml = `<div class="form">
                    <form name="simple form" autocomplete="on" novalidate>
                        <fieldset class="fieldset">
                            <legend class="legend"> Меню навигации сайта <button id="das"type="button" class="close" data-close="true">&times;</button></legend>
                            <a href="#project"><button type="button"> Наши проекты </button></a>
                            <a href="#areas-works"><button type="button"> Сфера деятельности </button></a>
                            <a href="#answers__questions"><button type="button"> Ответы на вопросы </button></a>
                            <a href="#partners"><button type="button"> Наши партнеры </button></a>
                            <a href="#reviews"><button type="button"> Отзывы </button></a>
                            <a href="#contacts"><button type="button"> Контакты </button></a>
                            <a href="#starts"><button type="button"> В начало </button></a>
                        </fieldset>
                    </form>
                </div>`
function openMenu  (event)  {
    if(event.target.dataset.open) {
        buttonClickBurger.innerHTML = menuHtml
        const close = document.querySelector('#das')
        close.addEventListener('click', closeMenu)
}
    }


buttonClickBurger.addEventListener('click' , openMenu);
function closeMenu () {
    buttonClickBurger.innerHTML = `<button class="menu__burger" data-open="true"></button>`
}

