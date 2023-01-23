 let num = [5,8,2,9,3]


num.push(1) // coloca no final, veja a ordem que você coloca essa informação
num.sort() // coloca em ordem 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log (`O valor não foi encontrado`)
} else {
    console.log (`O valor está na posição ${pos}`)
}   







/* 
let num = [5,8,2,9,3]
num[3] = 4 // para adiconar o que eu quiser na ordem que eu quiser, lembrando que começa do 0, ou seja 0,1,2,3...
num.push(9) // o .push serve pra colocar um conteúdo por último
num.length // para saber o comprimento, não tem parenteses no final para JS
num.sort() // coloca os elementos em ordem crescente
console.log(`Nosso vetor é o ${num}`) 
*/