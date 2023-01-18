function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
           for(let c = i; c <= f; c += p) { //o contador (c) recebe o inicio (i) (c=i) e enquanto ele for menor ou igual ao fim(f)(c<=f) o contador vai receber ele mesmo mais o passo (c += p)
            res.innerHTML += ` ${c} \u{27A1}` //o código normal era U+27A1, mas em javascript voce apaga esse U+ e substitui por \u{}
            }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}