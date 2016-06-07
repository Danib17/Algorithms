$(function() {
  //Add BTN
  $("#ArrayInputsButton1_").click(function() {
    $("#ArrayInputsButton1_").toggle();
    $("#ArrayInputsButton2_").toggle();
    $("#ArrayInputsButton3_").toggle();
    $("#ArrayInputsButton4_").toggle();

    $("#ArrayInputBar_").fadeIn(400);
    $("#ArrayDisplay_").animate({
      height: "79%",
    }, 200);
  });

  //Enter BTN
  $("#ArrayInputsButton2_").click(function() {

  });

  //Remove BTN
  $("#ArrayInputsButton3_").click(function() {

  });

  //Cancel BTN
  $("#ArrayInputsButton4_").click(function() {
    $("#ArrayInputsButton1_").toggle();
    $("#ArrayInputsButton2_").toggle();
    $("#ArrayInputsButton3_").toggle();
    $("#ArrayInputsButton4_").toggle();

    $("#ArrayInputBar_").fadeOut(200);
    $("#ArrayDisplay_").animate({
      height: "85%",
    }, 300);
  })
});
