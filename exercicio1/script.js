const array = [
    [27, 4, 20, 13, 14],//0
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
for (let i in array) {//array
    let temporada = `Jogador ${Number(i) + 1}:`
    for (let j of array[i]) {//array dentro do array
        temporada += j + ","
    
    }
    console.log(temporada)
}
for(let i in array){
    console.log(`Jogador ${Number(i)+1}: ${array[i]}`)
}