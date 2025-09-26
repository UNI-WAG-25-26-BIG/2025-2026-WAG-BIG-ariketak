function Faktoriala()
{
    /*1.mota */
    if (isNaN(parseInt(num1)) || Number(num1) < 0 || ((Number(num1) - parseInt(num1)) > 0))
    {
        return "Ez da zenbaki positibo oso bat. Saiatu berriro!"
    }
    else {
        a = 1
        for (i = 1; i <= num1; i++) {
            a = i * a
        }
        return a;
    }
   

 /* 2. mota
    var num1
    do {
        num1= prompt("Sartu zenbaki positibo oso bat: ")
    } while (isNaN(parseInt(num1)) || Number(num1) < 0 || ((Number(num1) - parseInt(num1)) > 0))

    a=1
    for(i=1;i<=num1;i++){
        a=i*a
    }
    return a;*/

    /* 3. mota  
    var num1
    let re = /^[0-9]+$/g;
    do {
        num1= prompt("Sartu zenbaki positibo oso bat: ")
    } while (!re.test(num1))

    a=1
    for(i=1;i<=num1;i++){
        a=i*a
    }
    return a;
 
    /* */
}

