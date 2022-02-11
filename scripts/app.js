// Логика открытия и закрытия меню

const buttonClickBurger = document.querySelector('.wrap');
let menuHtml = `<div class="form">
                    <form name="simple form" autocomplete="on" novalidate>
                        <fieldset class="fieldset">
                            <legend class="legend"> Меню навигации сайта <button id='das' type="button" class="close" data-close="true">&times;</button></legend>
                            <button type="button"> Наши проекты</button>
                            <button type="button"> Сфера деятельности</button>
                            <button type="button"> Ответы на вопросы</button>
                            <button type="button"> Наши партнеры</button>
                            <button type="button"> Отзывы</button>
                            <button type="button"> Контакты</button>
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

