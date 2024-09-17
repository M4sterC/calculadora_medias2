const form = document.getElementById('form-atividade')
let linhas = ''
const imgAprovado = 'Aprovado! <img src="./images/aprovado.png" alt = "Emoji Celebrando"/>'
const imgRerovado = 'Reprovado! <img src="./images/reprovado.png" alt = "Emoji Triste"/>'
const inputNomeAtividade = document.getElementById('nomeAtividade')
const inputNotaAtividade = document.getElementById('notaAtividade')
const atividades= []
const notas = []
const notaMinima = parseFloat(prompt('Digite a Nota Minima pra aprovação !'))

form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionaLinha()   
    atualizaTabela()
    atualizaMediaFinal()
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
    
})

function adicionaLinha() {
    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`À atividade: ${inputNomeAtividade.value} ja foi inserida !`)
    }else{

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))
    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td class= "descricaoResultado">${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgRerovado}</td>`
    linha += '</tr>'
    linhas += linha  
    }       
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    document.getElementById('médiaValor').innerHTML = mediaFinal

    if (mediaFinal >= notaMinima) {
        document.getElementById('médiaResultado').innerHTML = '<span class="resultado aprovado"> Aprovado ! </span>'
    }else{
        document.getElementById('médiaResultado').innerHTML = '<span class="resultado reprovado"> Reprovado ! </span>'
    }

}