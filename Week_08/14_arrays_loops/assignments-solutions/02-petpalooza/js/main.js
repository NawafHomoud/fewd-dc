var animalImages = [ "img/beagle.jpg",
                     "img/bunny.jpg",
                     "img/cat.jpg",
                     "img/iguana.jpg",
                     "img/pony.jpg" ];

$('#animal-selector').click(function() {
  $('#animal-header').show(200);
  for(var h=0; h < animalImages.length; h++) {
    $("#animal-output").append('<li><img src=' + animalImages[h] + '></li>');
  }
});
