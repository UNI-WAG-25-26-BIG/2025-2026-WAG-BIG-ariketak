function digituak(i)
{
    do
    {
        var num1=parseInt(prompt("Sartu "+i+" zenbakia. 3 digitu gutxienez:"));
    }
    while(isNaN(num1) || num1.toString().length < 3)
    return num1; 
}
function Kalkulatu(zenbakiak)
{
    if (zenbakiak[0] == zenbakiak[1] && zenbakiak[0] == zenbakiak[2])
    {
        return zenbakiak[1]+zenbakiak[2]+zenbakiak[0];
    }
    if (zenbakiak[0] >= zenbakiak[1] && zenbakiak[0] > zenbakiak[2])
    {
        return (zenbakiak[1]+zenbakiak[2])*zenbakiak[0];
    }
    if (zenbakiak[1] > zenbakiak[0] && zenbakiak[1] >= zenbakiak[2])
    {
        return (zenbakiak[0]+zenbakiak[2])*zenbakiak[1];
    }
    if (zenbakiak[2] >= zenbakiak[0] && zenbakiak[2] > zenbakiak[1])
    {
        return (zenbakiak[0]+zenbakiak[1])*zenbakiak[2];
    }
}