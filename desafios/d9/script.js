const res = document.getElementById('res')

function reajuste() {
    let funcionario = prompt('Qual é o nome do funcionário?')
    
    let salario = prompt(`Qual o salário de ${funcionario}?`)
    
    let porcentagem = prompt(`O salário de ${funcionario} será reajustado em qual porcentagem?`)

    result(funcionario,salario,porcentagem)
}

function result(funcionario,salario,porcentagem){
    let reajuste = salario * (porcentagem/100)

    let newsalario = salario + reajuste

    res.innerHTML = `<h2>${funcionario} recebeu um aumento salarial!</h2>`

    res.innerHTML += `<p>O salário atual é de R$ ${salario.toLocaleString('pt-br',{style:'currency',currency:'BRL'}).replace('.',',')}.</p>`

    res.innerHTML += `<p>Com o aumento de ${porcentagem}%, o salário  vai aumentar ${reajuste.toLocaleString('pt-br',{style:'currency',currency:'BRL'}).replace('.',',')} no próximo mês.</p>`

    res.innerHTML += `<p>E apartir daí, ${funcionario} vai passar a receber R$ ${newsalario.toLocaleString('pt-br',{style:'currency',currency:'BRL'}).replace('.',',')}</p>`
}
