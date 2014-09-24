// add icons
$('.playspace').append('<i class="em em-boy"></i>');
$('.playspace').append('<i class="em em-princess"></i>');
$('.playspace').append('<i class="em em-heart"></i>');


// set the initial positions

$('.em-boy').css({
  top: 200,
  left: 500
});

$('.em-princess').css({
  top: 200,
  left: 100
});


// play!

$('.em-boy').animate({
  left:150

}, 1000);

//after a delay, show heart
setTimeout(function()
{


$('.em-heart').css({
  left: 4,
  top:200
});

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
