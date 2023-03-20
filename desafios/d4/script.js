function comprar() {
    let prod = prompt('Que produto você está comprando?')
    let preco = prompt('Digite o valor do produto selecionado:')
    let valor = prompt('Digite quanto você deu em dinheiro para pagar o produto:')

    alert(`Você comprou ${prod} no valor de ${preco} reais. \nA quantia dada foi de ${valor} reais. \n Seu troco é de ${valor-preco} reais!`)
}