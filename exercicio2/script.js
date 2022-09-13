let input= Number(prompt('Insira um numero'))
let tabuada=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i in tabuada){
   console.log(`${input}*${tabuada[i]}=${input*tabuada[i]} `)
}