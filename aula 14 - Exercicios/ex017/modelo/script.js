function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
     window.alert('Por favor, digite um número.')  
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //para limpar a tabuada depois
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //p outras linguagens isso faz sentido(php), para saber qual item foi selecionado
            tab.appendChild(item)
            c++
        }
    }
    

}