$(document).ready(function() {
    $("#nireForm").submit(function(e){
        e.preventDefault();
        $(this).addClass('was-validated');
        if (!this.checkValidity()) {
            e.stopPropagation();
        }
        else
        {
            addLista();
        }
    });

    $("#Bistaratu").click(function() {
        $("ul li").each(function(){
            $(this).css("color", "white");
            $(this).css("font-weight", "800");
        });
        $("ul").css("background-color","green");
        $("ul").css("border","3px solid black");
        setTimeout(function(){ alert("Zure erosketa listo dago"); },50);
    });  
});
function addLista() {
    erosketa = $("input:text").val();
    $("#zerrenda").append("<li style='color:grey'>" + erosketa + "</li>");
    $("input:text").val("");
    $("#nireForm").removeClass('was-validated');
}   