/*
Crie um algoritmo que tem como entrada um array de
strings e trata essas string substituindo os números por letra de acordo com a
tabela a seguir, além disso, deve remover os espaços em branco no começo e
fim da string, se existirem.
Tabela:
1 : i
3 : e
4 : a
5 : s
0 : o
Exemplo entrada:
[' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw153', 'j4v4scr1pt ']
Exemplo Saída:
[ 'helloworld', 'webdeveloper', 'otterwise', 'javascript' ]
*/


let words = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']

const word = words.map(palavra => palavra.replace(/3/g, 'e'))
const word1 = word.map(palavra => palavra.replace(/1/g, 'i'))
const word2 = word1.map(palavra => palavra.replace(/4/g, 'a'))
const word3 = word2.map(palavra => palavra.replace(/5/g, 's'))
const word4 = word3.map(palavra => palavra.replace(/0/g, 'o'))

const spaces = word4.map(palavra => palavra.trim())


console.log(spaces)

