$(function() {
  

  $(".toggle").on("click", function() {
    var visible;
    var clicked = $(this);

    //turn on/off button
    clicked.toggleClass("selected");

    //turn on/off code area
    $("#" + clicked.text().toLowerCase()).toggle();

    //adjust widths of code areas
    visible = $(".code-div:visible").length;
    $(".code-div").width( Math.floor(100 / visible - 1) + "%");

  });



  $("#runButton").on("click", function() {

    $("iframe").contents().find("html").html('<style>' + $("#css textarea").val() + '</style>' + $("#html textarea").val());
    
    //THIS IS ONLY OK FROM FILE PROTOCOL!!!
    document.getElementById("resultFrame").contentWindow.eval($("#js textarea").val());

  });







});