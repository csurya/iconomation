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

//after a delay, show heart
setTimeout(function()
{

$('.em-heart').css({
  top: 200,
  left: 500
});

}, 660);


//then move boy & heart
$('.em-boy').animate({
  left: 113
}, 1000);

$('.em-heart').animate({
  left: 110
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
