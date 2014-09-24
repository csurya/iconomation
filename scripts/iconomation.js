// add icons
$('.playspace').append('<i class="em em-musical_note"></i>');
$('.playspace').append('<i class="em em-musical_keyboard"></i>');
$('.playspace').append('<i class="em em-woman"></i>');


// set the initial positions

$('.em-musical_keyboard').css({
  top: 200,
  left: 300
});

$('.em-woman').css({
  top: 300,
  left: 0
});

$('.em-musical_note').css({
  top: -200,
  left: -100
});


// play!

//move woman near piano
$('.em-woman').animate({
  left:290,
  top:210

}, 1000);

//after a delay, show music note
setTimeout(function()
{
$('.em-musical_note').css({
  left: 300,
  top:190
});
$('.em-musical_note').animate({
  left:290,
  top:-350

}, 2000);
}, 1000);








// after 660ms...
/*setTimeout(function()
{
  // ...move the ball
  $('.em-princess').animate
  (
  {
    left: 0
  }, 800, 'easeOutQuart'
  );
}, 660);
*/
