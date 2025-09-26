function AtzeraEgin()
{
    var irudia = document.getElementById("irudia");
    var izena = irudia.getAttribute("src");
    if (izena == "img/6.jpg")
    {
        var testua = document.getElementById("titulua");
        testua.innerHTML = "Kamiseta 11";
        irudia.src = "img/11.jpg"
    }
    else if (izena == "img/9.jpg")
    {
        var testua = document.getElementById("titulua");
        testua.innerHTML = "Kamiseta 6";
        irudia.src = "img/6.jpg"
    }
    else if (izena == "img/11.jpg")
    {
        var testua = document.getElementById("titulua");
        testua.innerHTML = "Kamiseta 9";
        irudia.src = "img/9.jpg"
    }
}
function AurreraEgin()
{
    var irudia = document.getElementById("irudia");
    var izena = irudia.getAttribute("src");
    if (izena == "img/11.jpg")
    {
        var testua = document.getElementById("titulua");
        testua.innerHTML = "Kamiseta 6";
        irudia.src = "img/6.jpg"
    }
    else if (izena == "img/9.jpg")
    {
        var testua = document.getElementById("titulua");
        testua.innerHTML = "Kamiseta 11";
        irudia.src = "img/11.jpg"
    }
    else if (izena == "img/6.jpg")
    {
        var testua = document.getElementById("titulua");
        testua.innerHTML = "Kamiseta 9";
        irudia.src = "img/9.jpg"
    }
}
