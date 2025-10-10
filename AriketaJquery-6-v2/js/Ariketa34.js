$(function () {
    $(document).on('keydown', function (e) {
        console.log(e.key);
        switch (e.key) {
            case "ArrowLeft":
                $("#rocket").css({'transform':'rotate(0deg)'})
                if (e.ctrlKey) {
                    $("#rocket")
                        .css({'transform':'rotate(-45deg)'})
                        .animate({
                        top: "-=10px",
                        left: "-=10px"
                    }, 50);
                } else if (e.shiftKey) {
                    $("#rocket")
                        .css({'transform':'rotate(-135deg)'})
                        .animate({
                        top: "+=10px",
                        left: "-=10px"
                    }, 50);
                } else {
                    $("#rocket")
                        .css({'transform':'rotate(-90deg)'})
                        .animate({
                        left: "-=10px"
                    }, 50);
                }
                break;
            case "ArrowRight":
                $("#rocket").css({'transform':'rotate(0deg)'})
                if (e.ctrlKey) {
                    $("#rocket")
                        .css({'transform':'rotate(45deg)'})
                        .animate({
                        top: "-=10px",
                        left: "+=10px"
                    }, 50);
                } else if (e.shiftKey) {
                    $("#rocket")
                        .css({'transform':'rotate(135deg)'})
                        .animate({
                        top: "+=10px",
                        left: "+=10px"
                    }, 50);
                } else {
                    $("#rocket")
                        .css({'transform':'rotate(90deg)'})
                        .animate({
                        left: "+=10px"
                    }, 50);
                }
                break;
            case "ArrowUp":
                $("#rocket").css({'transform':'rotate(0deg)'})
                $("#rocket").animate({
                    top: "-=10px"
                }, 50);
                break;
            case "ArrowDown":
                $("#rocket").css({'transform':'rotate(180deg)'})
                $("#rocket").animate({
                    top: "+=10px"
                }, 50);
                break;
            case "c":
                $("#rocket").css({'transform':'rotate(0deg)'})
                $("#rocket").animate({
                    top: "0",
                    left: "50%"
                }, 50);
                break;
        }
    });
});
