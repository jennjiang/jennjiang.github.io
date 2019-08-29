// var timesClicked = 0;

// $(".button").click(function() {
//   timesClicked++;

//   if (timesClicked > 1) {
//   } else {
//   }
// });

$(".button").click(function(event) {
  var buttonElement = $(event.target);
  var bodyElement = $("body");
  if (buttonElement.hasClass("on")) {
    buttonElement.removeClass("on");
    bodyElement.removeClass("switch-color");
  } else {
    buttonElement.addClass("on");
    bodyElement.addClass("switch-color");
  }
});

$(".button2").click(function(event) {
  var buttonElement = $(event.target);
  var bodyElement = $("body");
  if (buttonElement.hasClass("on")) {
    buttonElement.removeClass("on");
    bodyElement.removeClass("animated-color");
  } else {
    buttonElement.addClass("on");
    bodyElement.addClass("animated-color");
  }
});

//circle
function scrollHandler() {
  var scrollTop = $(document).scrollTop();
  $(".circle").css("transform", `rotate(${scrollTop}deg)`);
  $(".circle2").css("transform", `rotate(${scrollTop}deg)`);
  $(".circle3").css("transform", `rotate(${scrollTop}deg)`);
  // console.log('scroll happened');
  console.log(scrollTop);
}

function showIntro(event) {
  var personName = $(event.target.closest("div")).attr("class");
  var link = $(event.target.closest(".bio-link")).attr("href");
  var intro = `Here is ${personName}!`;
  event.preventDefault();
  console.log(event);
  $(".introWindow").addClass("show-centered-text");
  $(".introText").text(intro);
  setTimeout(function() {
    window.location = link;
  }, 2500);
}

$(document).ready(function() {
  $(window).scroll(scrollHandler);
  $(".profile").click(showIntro);
});
