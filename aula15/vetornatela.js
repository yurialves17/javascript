let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)
/*
for (var pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores}`)
}

