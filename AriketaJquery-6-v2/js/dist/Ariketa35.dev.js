"use strict";

$(function () {
  $(document).on('keydown', function (e) {
    console.log(e.key);

    switch (e.key) {
      case "ArrowLeft":
        if (e.ctrlKey) {
          $("#rocket").animate({
            top: "-=10px",
            left: "-=10px"
          }, 50);
        } else if (e.shiftKey) {
          $("#rocket").animate({
            top: "+=10px",
            left: "-=10px"
          }, 50);
        } else {
          $("#rocket").animate({
            left: "-=10px"
          }, 50);
        }

        break;

      case "ArrowRight":
        if (e.ctrlKey) {
          $("#rocket").animate({
            top: "-=10px",
            left: "+=10px"
          }, 50);
        } else if (e.shiftKey) {
          $("#rocket").animate({
            top: "+=10px",
            left: "+=10px"
          }, 50);
        } else {
          $("#rocket").animate({
            left: "+=10px"
          }, 50);
        }

        break;

      case "ArrowUp":
        $("#rocket").animate({
          top: "-=10px"
        }, 50);
        break;

      case "ArrowDown":
        $("#rocket").animate({
          top: "+=10px"
        }, 50);
        break;

      case "c":
        $("#rocket").animate({
          top: "0",
          left: "50%"
        }, 50);
        break;
    }
  });
});