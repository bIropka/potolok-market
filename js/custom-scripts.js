/**
 * Created by Егор on 12.09.2016.
 */
$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    if ($(window).width() < '981'){
        $('nav > ul > li ul').fadeOut();
        $('nav > ul > li p').removeClass('opened');
        $('.custom-select .current-value').removeClass('active');
        $('.custom-select ul').slideUp();
    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '981'){
            $('nav > ul > li ul').fadeOut();
            $('nav > ul > li p').removeClass('opened');
        } else {

        }
    });

    initCounters();

    function initCounters() {
        var counters = document.getElementsByClassName('dish-counter');
        for (var i = 0; i < counters.length; i++) {
            var amount = parseInt($(counters[i]).find('input').val());
            $(counters[i]).find('.current-value').html(amount);
        }
    }

    /******************************
     ******* other scripts ********
     ******************************/

    $('nav > ul > li').hover(
        function() {
            if ($(window).width() > '980'){
                $(this).addClass('active');
                $(this).find('p').addClass('opened');
                $(this).find('ul').stop().slideDown();
            }
        },
        function() {
            if ($(window).width() > '980'){
                $(this).removeClass('active');
                $(this).find('p').removeClass(' opened');
                $(this).find('ul').stop().slideUp();
            }
        }
    );

    $('nav > ul > li p').click(function() {
            if ($(window).width() < 981){
                $(this).toggleClass('opened');
                $(this).siblings('ul').stop().slideToggle();
            }
        }
    );

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('nav').slideToggle();
    });

    $(function($) {
        $('form').validatr({
            showall: true
        });
    });

    $('.form-submit').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        $(this).parents('form').find('.custom-checkbox:invalid').addClass('invalid-field');
        $(this).parents('form').find('.no-validation').removeClass('invalid-field');
    });

    $('.callback').click(function () {
        $('.window-callback').fadeIn();
    });
    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
    });

    $('.send-cv').click(function () {
        $('.window-cv').fadeIn();
    });
    $('.window-cv').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-cv')).length) $('.window-cv').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-cv').fadeOut();
    });

    $('input').on('focus', function() {
        $(this).removeClass('valid-field invalid-field');
    });
    $('input[type="checkbox"]').on('change', function() {
        $(this).removeClass('valid-field invalid-field');
    });

    var inputTel = $('input[type="tel"]');
    inputTel.mask("+7 ( 999 ) 999 - 99 - 99");
    inputTel.click(function() {
        $(this).focus();
    });

    $('.filter li').click(function() {
        $('.filter .active').removeClass('active');
        $(this).addClass('active');
    });

    $('.dish-counter .control').click(function() {

        var inputValue = parseInt($(this).siblings('label').find('input').val());

        if($(this).hasClass('increment')) {
            inputValue++;
        } else if($(this).hasClass('decrement') && inputValue > 1) {
            inputValue--;
        }

        $(this).siblings('.current-value').html(inputValue);
        $(this).siblings('label').find('input').val(inputValue);

    });

    $('.custom-select').hover(
        function(){
            if ($(window).width() > '980'){
                $(this).find('.current-value').next('i').removeClass('fa-angle-down fa-angle-up');
                $(this).find('.current-value').next('i').addClass('fa-angle-up');
                $(this).find('ul').stop().slideDown();
            }
        },
        function() {
            if ($(window).width() > '980'){
                $(this).find('.current-value').next('i').removeClass('fa-angle-down fa-angle-up');
                $(this).find('.current-value').next('i').addClass('fa-angle-down');
                $(this).find('ul').stop().slideUp();
            }
        });

    $('.custom-select .current-value').click(function() {
        if ($(window).width() < '981'){
            $(this).next('i').toggleClass('active');
            $(this).siblings('ul').stop().slideToggle();
        }
    });

    $('.custom-select ul li').click(function() {
        $(this).parent('ul').slideUp();
        var value = $(this).html();
        $(this).parent().siblings('.current-value').html(value);
        $(this).parent().next().find('input').val(value);
    });

    $(document).click(function() {

        $target = $(event.target);

        if (!$target.closest($('.custom-select')).length){
            $('.custom-select .current-value').next('i').removeClass('active');
            $('.custom-select ul').slideUp();
        }

    });

    $('.phones-select').hover(
        function(){
            if ($(window).width() > '980'){
                $(this).find('.fa-angle-down').toggleClass('fa-angle-down fa-angle-up');
                $(this).find('ul').stop().slideDown();
            }
        },
        function() {
            if ($(window).width() > '980'){
                $(this).find('.fa-angle-up').toggleClass('fa-angle-down fa-angle-up');
                $(this).find('ul').stop().slideUp();
            }
        });

    $('.form-search').hover(
        function(){
            if ($(window).width() > '980'){
                $(this).find('input').addClass('active');
            }
        },
        function() {
            if ($(window).width() > '980'){
                $(this).find('input').removeClass('active');
            }
        });

    $('.to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });


    /*******************************
     ******* slider scripts ********
     ******************************/



});

