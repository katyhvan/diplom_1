import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use({ Navigation, Pagination });

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


let hamburger = $('.hamburger');
let nav = $('.header__nav');

hamburger.on('click', function () {
  hamburger.toggleClass('is-active')
  nav.toggleClass('is-active')
})


$(function (){
  let welcome = $('.welcome');
  let move = $('.welcome__img');
  
  welcome.on('mousemove', function(event) {
    move.css({
      transform: `
      translateX(${event.clientX * 0.03}px)
      `
    })
  })
})
