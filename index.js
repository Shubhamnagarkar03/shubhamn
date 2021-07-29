$(document).ready(function () {


  $(".logo").hide().slideDown(1500);
  $(".back1,.back2,.back4").hide().fadeIn(2000);
  $(".navbar").hide().fadeIn(1800);
  $(".btn").hide().fadeIn(2200);
  $("#myCarousel").hide().fadeIn(3000);
  $(".lastf,.shb").hide().fadeIn(3500);
  $(".des").hide().fadeIn(2000)


});
$(document).ready(function () {
  $(".btn").click(function change() {
    alert("Have you checked the Pricing?");
    $(".back1,.back2,.back4").hide().fadeIn(2000);
    $(".intro1").text("Thanks for Hiring me!");
    $(".intro2").text("And, hope you have a good day");
    $(".intro3").text("Mail me a 'Hi' to initiate");
    $(".btn").text("Mail me");
    $(".btn").click(function () {
      window.open("mailto:s9nagarkar@gmail.com");
    });


  });
});
