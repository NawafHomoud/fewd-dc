$("#national-park-select-list").submit(function( event ) {
  // Capture the value from the national park select list
  var natParkValue = $("#np-value").val();

  // Check the value from the select list
  if(natParkValue === "Acadia") {
    $("#national-park-location").text(natParkValue);
    $("#np-picture").html('<img src="img/acadia.jpg">');
  } else if(natParkValue === "Banff") {
    $("#national-park-location").text(natParkValue);
    $("#np-picture").html('<img src="img/banff.jpg">');
  } else if(natParkValue === "Zion") {
    $("#national-park-location").text(natParkValue);
    $("#np-picture").html('<img src="img/zion.jpg">');
  }

  // Make sure the form doesn't actually submit itself
  event.preventDefault();
});
