// add icons
$('.playspace').append('<i class="em em-rooster"></i>');
$('.playspace').append('<i class="fa fa-futbol-o"></i>');


// set the initial positions

$('.em-boy').css({
  top: 200,
  left: 300
});

$('.em-princess').css({
  top: 210,
  left: 100
});


// play!

$('.em-boy').animate({
  left: 50
}, 1000);

// after 660ms...
setTimeout(function()
{
  // ...move the ball
  $('.em-princess').animate
  (
  {
    left: 0
  }, 800, 'easeOutQuart'
  );
}, 660);
