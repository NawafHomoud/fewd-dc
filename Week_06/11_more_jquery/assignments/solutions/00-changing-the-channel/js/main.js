// document.ready makes the JS wait until the page fully loads
$(document).ready(function() {

  // We find the element, and then change the attribute
  // Did you remember your selectors from CSS???
  $('#1').click(function() {
    $('#screen img').attr('src', 'img/blue-planet.jpg');
  });

  $('#2').click(function() {
    $('#screen img').attr('src', 'img/cnn.jpg');
  });

  $('#3').click(function() {
    $('#screen img').attr('src', 'img/deadpool.jpg');
  });

  $('#4').click(function() {
    $('#screen img').attr('src', 'img/good-will-hunting.jpg');
  });

  $('#5').click(function() {
    $('#screen img').attr('src', 'img/gravity.jpg');
  });

  $('#6').click(function() {
    $('#screen img').attr('src', 'img/koyaanisqatsi.jpg');
  });

  $('#7').click(function() {
    $('#screen img').attr('src', 'img/parts-unknown.jpg');
  });

  $('#8').click(function() {
    $('#screen img').attr('src', 'img/star-wars-solo.jpeg');
  });

  $('#9').click(function() {
    $('#screen img').attr('src', 'img/stranger-things.jpg');
  });
  
})