// Tresna orokorrak
const hutsikEz = s => typeof s === 'string' && s.trim().length > 0

// Hitzak irakurri 
const hitzakIrakurri = () => {
  const w1 = (document.getElementById('w1')?.value ?? '').trim()
  const w2 = (document.getElementById('w2')?.value ?? '').trim()
  const w3 = (document.getElementById('w3')?.value ?? '').trim()
  return [w1, w2, w3]
}

// Hitzak prozesatu: lehen MAIUS, azken minus, luzera maximoa
/*const hitzakProzesatu = (zerrenda = []) => {
  const [lehen = '', , azken = ''] = zerrenda
  const luzerak = zerrenda.map(h => h.length)
  const luzeraMax = luzerak.length ? Math.max(...luzerak) : 0
  return {
    lehenMaius: lehen.toUpperCase(),
    azkenMinus: azken.toLowerCase(),
    luzeraMax
  }
}*/
// Hitzak prozesatu: lehen MAIUS, azken minus, luzera maximoa
const hitzakProzesatu = (zerrenda = []) => {
  const lehen = zerrenda.length > 0 ? zerrenda[0] : ''
  const azken = zerrenda.length > 0 ? zerrenda[zerrenda.length - 1] : ''

  let luzeraMax = 0
  for (let i = 0; i < zerrenda.length; i++) {
    if (zerrenda[i].length > luzeraMax) {
      luzeraMax = zerrenda[i].length
    }
  }

  return {
    lehenMaius: lehen.toUpperCase(),
    azkenMinus: azken.toLowerCase(),
    luzeraMax
  }
}


// Emaitzak pantailaratzea
const emaitzakBistaratu = ({ lehenMaius, azkenMinus, luzeraMax }, zerrenda) => {
  const $irteera = document.getElementById('output')
  const $lehen = document.getElementById('first')
  const $azken = document.getElementById('last')
  const $max = document.getElementById('maxlen')
  const $zerrenda = document.getElementById('list')

  $lehen.textContent = lehenMaius
  $azken.textContent = azkenMinus
  $max.textContent = luzeraMax
  $zerrenda.textContent = zerrenda.join(', ')

  $irteera.hidden = false
}

// Balidazioa: hutsik ez
const balioztatu = zerrenda => zerrenda.every(hutsikEz)

// Programa nagusia
const inprimakia = document.getElementById('form')
inprimakia.addEventListener('submit', gertaera => {
  gertaera.preventDefault()
  const hitzak = hitzakIrakurri()
  if (!balioztatu(hitzak)) {
    alert('Mesedez, bete hiru eremuak.')
    return
  }
  const informazioa = hitzakProzesatu(hitzak)
  emaitzakBistaratu(informazioa, hitzak)
})

// Garbitu botoia
document.getElementById('clearBtn').addEventListener('click', () => {
  ;['w1','w2','w3'].forEach(id => (document.getElementById(id).value = ''))
  document.getElementById('output').hidden = true
  document.getElementById('w1').focus()
})
