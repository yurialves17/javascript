const res = document.getElementById('res')

function desconto() {
    let prod = prompt('Qual é o produto que você está comprando?')
   
    let preco = Number(prompt(`Qual é o preço ${prod}?`))
   
    des10porcet(prod,preco)
    
}
function des10porcet(prod,preco) {
    let valor = Number(preco)
    let desconto = (preco * 0.1) 
    let valfinal = valor - desconto

    res.innerHTML = `<h2>Calculando desconto de 10% para ${prod}</h2>`

    res.innerHTML += `<p>O preço eriginal era ${valor.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}.</p>`

    res.innerHTML += `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-br', {style:'currency',currency: 'BRL'})} de desconto (-10%).</p>`

    res.innerHTML += `<p>No fim, você pagar ${valfinal.toLocaleString('pt-br',{style:'currency',currency:'BRL'})} no produto ${prod}.</p>`
}
