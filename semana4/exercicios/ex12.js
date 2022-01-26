/*
 Dado o objeto abaixo, faça um programa que imprime no
console o nome, cpf e telefone formatados. Dica: Separe o código em funções
de formatação para cada um dos campos.
Exemplo de Entrada 1:
{nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}
Exemplo de Saída 1:
Analu dos Santos Baptista
147.762.139-31
(83) 2800-8258
Exemplo de Entrada 2:
{nome: 'Cláudio da silva figueiredo ', cpf: '47187999887', telefone:
'11988754092'}
Exemplo de Saída 2:
Cláudio da silva figueiredo
471.879.998-87
(11) 98875-4092
*/

let user = {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}


const funcName = (letra) => {
    return letra.toUpperCase()
}
const regexName = /\s{1}\w{1}/g
const nomeFinal = user.nome.replace(regexName, funcName)
console.log(nomeFinal)

const funcCpf = (_, p1, p2, p3, p4) => {
    return p1 + '.' + p2 + '.' + p3 + '-' + p4 
}
const regexCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/
const cpfFinal = user.cpf.replace(regexCpf, funcCpf)
console.log(cpfFinal)

const funcTel = (_, p1, p2, p3) => {
    return '(' + p1 + ')' + " " + p2 + '-' + p3
}

const regexTel = /(\d{2})(\d{4})(\d{4})/
const telFinal = user.telefone.replace(regexTel, funcTel)
console.log(telFinal)