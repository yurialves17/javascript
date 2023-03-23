const res = document.getElementById('res')

function enter(){
    let aluno = prompt('Qual o nome do aluno?')
    let nota1 = prompt(`Digite a primeira nota de ${aluno}.`)
    let nota2 = prompt(`Digite a segunda nota de ${aluno}.`)

    let n1 = Number(nota1)
    let n2 = Number(nota2)

    if (nota1.length == 0 || nota2.length == 0 || aluno.length == 0) {
        alert('[ERRO] preencha os campos com seu nome e suas notas.')
    } else {
        if (n1 <= 0 || n1 >= 0 && n2 <= 0 || n2 >= 0){
            n1 = Math.abs(n1);
            n2 = Math.abs(n2);
            situacaoAluno(aluno, n1, n2)
        } else {
            alert ('[ERRO] Valor inserido invalido ou inexistênte, por favor tente novamente!')
        }
    }
}

function situacaoAluno(nome, nota1=0, nota2=0) {

    let aluno = nome; 
    let n1 = nota1;
    let n2 = nota2;
    let media = ((n1 + n2)/2);
    let situacao = new String;

    res.innerHTML = `<h2>Analisando situaçao de ${aluno}.</h2>`

  if (media > 6) {
    situacao = 'APROVADO'

    res.innerHTML += `<p>Com as notas ${n1.toLocaleString({style:'decimal'})} e ${n2.toLocaleString({style:'decimal'})} a <strong>média é ${media.toLocaleString({style:'decimal'})}</strong></p>`

    res.innerHTML += `<p>Com média acima de 6,0 o aluno está <mark style "background-color: lightgreen;"><strong style = "color: darkgreen;">${situacao}</strong></mark></p>`

  } else if (media >= 3 && media <= 6) {
    situacao = 'RECUPERÇÃO'
 
    res.innerHTML += `<p>Com as notas ${n1.toLocaleString({style:'decimal'})} e ${n2.toLocaleString({style:'decimal'})} a <strong>média é ${media.toLocaleString({style:'decimal'})}</strong></p>`;

    res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <mark style = "background-color: #ffe3a8;"><strong style = "color: #b88702;">${situacao}</strong></mark></p>`;
  } else {
    situacao = 'REPROVADO' 

    res.innerHTML += `<p>Com as notas ${n1.toLocaleString({style:'decimal'})} e ${n2.toLocaleString({style:'decimal'})} a <strong>média é ${media.toLocaleString({style:'decimal'})}</strong></p>`

    res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <mark style = "background-color: #ff8484;"><strong style = "color: #610b0b;">${situacao}</strong></p>`
  }
}