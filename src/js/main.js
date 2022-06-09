import $ from 'jquery';


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
