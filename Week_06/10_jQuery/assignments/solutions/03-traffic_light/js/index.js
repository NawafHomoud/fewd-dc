$(document).ready(function(){

  $("#stopButton").click(stopLight);
  $("#slowButton").click(slowLight);
  $("#goButton").click(goLight);

  function stopLight(){
    $("#stopLight").addClass("red");
    $("#goLight").removeClass("green");
    $("#slowLight").removeClass("yellow")
  }

  function slowLight(){
    $("#slowLight").addClass("yellow")
    $("#stopLight").removeClass("red");
    $("#goLight").removeClass("green");
  }

  function goLight(){
    $("#goLight").addClass("green");
    $("#slowLight").removeClass("yellow")
    $("#stopLight").removeClass("red");
  }

})
