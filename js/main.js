$(document).ready(() => {
    let errorMessage = $('.error-message');
    let burgundyBtn = $('.burgundy-btn');

    // Инициализация карусели со счетчиком в 9-ом блоке

    let $status = $('.pagingInfo');
    let $slickElement = $('#reviews-carousel');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' ' + '/' + ' ' + slick.slideCount);
    });

    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        arrows: true,
    });

    // Валидация заявки в восьмом блоке

    $($(burgundyBtn)[3]).click(() => {
        let requestName = $('#request-name');
        let requestPhone = $('#request-phone');

        if (requestName.val() && requestPhone.val()) {
            errorMessage.hide();
            requestName.css('border-color', '#202020');
            requestPhone.css('border-color', '#202020');
            // $.ajax({
            //         type: 'post',
            //         url: 'mail.php',
            //         data: '&name=' + requestName.val() + '&phone=' + requestPhone.val(),
            //         success: () => {
            //             $('#request-form').hide();
            //             $('#request-successes').show();
            //         },
            //         error: () => {
            //             alert('Ошибка запроса, неполадки с сервером.')
            //         }
            //     });
            $('#request-form').hide();
            $('#request-successes').show();
            $('#pop-up-request-content').hide();
            $('#pop-up-successful-content').show();
        } else {
            if (!requestName.val()) {
                $(errorMessage[0]).show();
                requestName.css('border-color', 'red');
            } else {
                $(errorMessage[0]).hide();
                requestName.css('border-color', '#202020');
            }
            if (!requestPhone.val()) {
                $(errorMessage[1]).show();
                requestPhone.css('border-color', 'red');
            } else {
                $(errorMessage[1]).hide();
                requestPhone.css('border-color', '#202020');
            }
        }
    });

    // Скрипт на открытие поп-апов

    $('.open-pop-up').click(() => {
        $('#pop-up').fadeIn().css('display', 'flex');
    })

    // Скрипт для закрытия поп-апа

    $('#pop-up').click((e) => {
        if (e.target.id === 'pop-up' || e.target.id === 'pop-up-close') {
            $('#pop-up').fadeOut();
        }
    });

    // Валидация полей в поп-апе

    $($(burgundyBtn)[4]).click(() => {
        let popUpName = $('#pop-up-name');
        let popUpPhone = $('#pop-up-phone');

        if (popUpName.val() && popUpPhone.val()) {
            errorMessage.hide();
            popUpName.css('border-color', '#202020');
            popUpPhone.css('border-color', '#202020');
            // $.ajax({
            //         type: 'post',
            //         url: 'mail.php',
            //         data: '&name=' + popUpName.val() + '&phone=' + popUpPhone.val(),
            //         success: () => {
            //             $('#pop-up-request-content').hide();
            //             $('#pop-up-successful-content').show();
            //         },
            //         error: () => {
            //             alert('Ошибка запроса, неполадки с сервером.')
            //         }
            //     });
            $('#pop-up-request-content').hide();
            $('#pop-up-successful-content').show();
            $('#request-form').fadeOut();
            $('#request-successes').fadeIn();
        } else {
            if (!popUpName.val()) {
                $(errorMessage[2]).show();
                popUpName.css('border-color', 'red');
            } else {
                $(errorMessage[2]).hide();
                popUpName.css('border-color', '#202020');
            }
            if (!popUpPhone.val()) {
                $(errorMessage[3]).show();
                popUpPhone.css('border-color', 'red');
            } else {
                $(errorMessage[3]).hide();
                popUpPhone.css('border-color', '#202020');
            }
        }
    });

    $($(burgundyBtn)[5]).click(() => {
        $('#pop-up').hide();
    })

    // Открытие и закрытие меню в хедере и футере для разрешения смартфонов

    $(window).on('resize', function () {
        if ($(window).width() < 1023) {
            $('.header-items').click((e) => {
                if (e.target.className === 'header-footer-item' || e.target.id === 'close-header-menu') {
                    $('.header-items').fadeOut();
                }
            });

            $('#footer-items').click((e) => {
                if (e.target.className === 'header-footer-item') {
                    $('#footer-items').fadeOut();
                }
            });

            $('#footer-close').click(() => {
                $('#footer-items').fadeOut();
            })
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() < 1022 && $(window).width > 767) {
            $('.header-footer-item').css('display', 'block');
        }
    });

    $('#menu-icon').click(() => {
        $('.header-items').fadeIn().css('display', 'flex');
    })

    $('#footer-menu').click(() => {
        $('#footer-items').fadeIn().css('display', 'flex');
    })

//    Карусель для блока с материалами

    $('#edit-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

//    Карусель для блока с отделками

    $('#finishing-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

//    Карусель для блока с Фурнитурой

    $('#fittings-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

//    Карусель наполнителей

    $('#filling-carousel').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 727,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});