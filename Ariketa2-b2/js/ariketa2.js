function Balidatu()
{
    /*1. mota
    do{
        var pasahitza = prompt("Sartu pasahitza");
        var pasahitza2 = prompt("Sartu pasahitza berriro");
        if (pasahitza!=pasahitza2)
        {
            alert("Pasahitzak ez dira berdinak. Saiatu berriro!!");
        }
    }while(pasahitza!=pasahitza2)

    alert("Ongi etorri sistemara");

     */

    //2. mota
    var pasahitza = prompt("Sartu pasahitza");
    var pasahitza2 = prompt("Sartu pasahitza berriro");
    while(pasahitza == "" || pasahitza== null || pasahitza!=pasahitza2)
    {
        alert("Pasahitzak ez dira berdinak. Saiatu berriro!!");
        pasahitza = prompt("Sartu pasahitza");
        pasahitza2 = prompt("Sartu pasahitza berriro");
    }
    alert ("Ongi etorri sistemara");

     /*
    while (true)
    {
        var pasahitza = prompt("Sartu pasahitza");
        var pasahitza2 = prompt("Sartu pasahitza berriro");
        if (pasahitza== pasahitza2)
        {
            break;
        }
        alert("Pasahitzak ez dira berdinak. Saiatu berriro!!");
    }
    alert ("Ongi etorri sistemara");
    */
}
