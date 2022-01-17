if(document.querySelector('#mobile_menu_toggle')) {
    document.querySelector('#mobile_menu_toggle').addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        document.querySelector(".hamburger").classList.toggle('active');
        document.body.classList.toggle('hidden');
        document.querySelector(".content").classList.toggle('margin');
        document.querySelector(".js-header__logo").classList.toggle('hidden');
    })
}
var swiper1 = new Swiper(".js-main-page-future-slider", {

    slidesPerView: 'auto',
    spaceBetween: 30,
    mousewheel: true,
    speed: 550,

    breakpoints:{
        320:{
            spaceBetween: 10,
        },
        769:{
            spaceBetween: 20,
        },
        992:{
            spaceBetween: 30,
        }
    }
});
var swiper2 = new Swiper(".js-harvest-page-top__slider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    speed: 550,
     // effect: "fade",

    navigation: {
        nextEl: ".js-harvest-page-top__arrow-next",
        prevEl: ".js-harvest-page-top__arrow-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        150:{
            spaceBetween: 15
        },
        651:{
            spaceBetween: 30
        }
    }
});

var swiper3 = new Swiper(".js-harvest-payment-page-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 550,
    breakpoints:{
        150:{
            slidesPerView: 1,
            spaceBetween: 15,

        },
        601:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        769:{
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$(document).on('click', '.js-main-page-faq__question', function (e) {
    if ($(this).parents('.js-main-page-faq__cover').hasClass('active')) {
        // console.log(1)
        $(this).parents('.js-main-page-faq__cover').removeClass('active');
        $(this).siblings('.js-main-page-faq__answer').hide(300);
    } else {
        // console.log(2)
        $(this).parents('.js-main-page-faq__cover').siblings().removeClass('active');
        $(this).parents('.js-main-page-faq__cover').siblings().find('.js-main-page-faq__answer').slideUp();
        $(this).parents('.js-main-page-faq__cover').addClass('active');
        $(this).siblings('.js-main-page-faq__answer').show(300);
    }
});
if(document.querySelector('.js-private-office__more-click-link')) {
    if ($(window).width() > 1200) {

        document.querySelector('.js-private-office__more-click-link').addEventListener("click", function (e) {
            e.preventDefault();
            this.classList.toggle('active');
            document.querySelector('.js-private-office__more-hide').classList.toggle('active');
        })
    }
}
if(document.querySelector('.js-private-office-top-bar__notification-block')) {

    document.querySelector('.js-private-office-top-bar__notification-block').addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        document.querySelector('.js-private-office-top-bar__notification-hide').classList.toggle('active');
    })
}
if(document.querySelector('.js-private-office-top-bar__notification-block-slider')){
    document.querySelector('.js-private-office-top-bar__notification-block-slider').addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        document.querySelector('.js-private-office-top-bar__notification-hide-slider').classList.toggle('active');
    })
}


if ($(window).width() < 1201){
    var swiper4 = new Swiper(".js-private-office-top-bar-slider", {
        slidesPerView: 'auto',
        mousewheel: true,
        speed: 450,
    });
}

if(document.querySelector('.js-private-office-top-bar__burger')) {
    document.querySelector('.js-private-office-top-bar__burger').addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
        document.querySelector(".js-private-office__menu-col").classList.toggle('active');
        document.body.classList.toggle('hidden');
        document.querySelector(".js-private-office__right").classList.toggle('translate');
        // document.querySelector(".js-header__logo").classList.toggle('hidden');
    })
}



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    var tabForTitle= document.querySelector('.js-private-office-security');

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
       // var tabTitle = tablinks[i].value;

    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    var tabTitle = evt.currentTarget.value;
    tabForTitle.innerHTML=tabTitle;
}

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

