function datuakIrakurri() {
	let soldata, antzinatasuna;
	do {
        soldata = Number(prompt("Sartu soldata: "));
    }while(isNaN(soldata))

    do {
        antzinatasuna = parseInt(prompt("Sartu antzinatasuna: "));
    }while(isNaN(antzinatasuna))
		
	return [soldata, antzinatasuna];
}
function soldataKalkulatu(soldata, antzinatasuna) {
	var resultado = 0
	if (soldata < 1200 && antzinatasuna > 10) {
		resultado = soldata * 1.2
	} else if (soldata < 1200 && antzinatasuna <= 10) {
		resultado = soldata * 1.05
	} else if (soldata > 1200) {
		resultado = soldata
	}
	return resultado
}