{ // бургер меню
    const burgerBtn = document.querySelector(".menu__btn");
    const menuList = document.querySelector(".menu__list");
    const logo = document.querySelector(".header__title");


    burgerBtn.addEventListener('click', function (){
        this.classList.toggle("menu__btn-visited");
        menuList.classList.toggle("menu__list-visited");
        logo.classList.toggle("header__title-visited");
    });
}


{ // модальное окно в секции design на главной странице

    const designBtn = document.querySelector(".design__btn");
    const modalClos = document.querySelector(".modal__clos");
    const modal = document.querySelector(".modal");

    designBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('active__modal');
    });

    modalClos.addEventListener('click', () => {
        modal.classList.remove('active__modal');
    });
}