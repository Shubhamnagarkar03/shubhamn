$(document).ready(function () {
  $(".btn-outline-dark").click(function () {
    var sound = new Audio("shubham.mp3");
    sound.play();

 });
});
$(document).ready(function () {
    $("#pic").hide().show(1000);
    $(".navbar").hide().fadeIn(1000);
    $(".container-sm").hide().fadeIn(2000);
    $(".des").hide().fadeIn(1500);
    $(".lastf").hide().fadeIn(3500);
    $(".modal1").click(function () {
      $(".modal").hide().slideDown();
    });
    $(".btn-close, .btn-secondary").click(function () {
      $(".modal").hide();
    });

    $(".btn-primary").click(function () {
      console.log(document.getElementById('onesug').value);
    });
});
