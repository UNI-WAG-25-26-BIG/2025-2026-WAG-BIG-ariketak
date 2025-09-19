function liburutegia(){
    let liburua={
        titulua: "Txomin hondartzan",
        autorea: "Txomin",
        irakurrita: true
    }
    let liburua2={
        titulua: "El Hobbit",
        autorea: "J.R.R. Tolkien",
        irakurrita: false
    }
    let liburuak= new Array();
    liburuak.push(liburua);
    liburuak.push(liburua2);

    for (let i= 0; i <= liburuak.length; i++) {
        if(liburuak[i].irakurrita){
            alert("Liburu hau irakurrita daukazu "+ liburuak[i].titulua+", "+liburuak[i].autorea)
        }
        else{
            alert("Liburu hau irakurri behar duzu "+liburuak[i].titulua+", "+liburuak[i].autorea)
        }


    }

}
