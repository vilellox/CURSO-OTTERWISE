/*
Escreva um programa que tenham como entrada um valor. Este valor é a
quantidade de linhas de saída que serão apresentadas na execução do
programa.
Exemplo de Entrada:
7
Exemplo de Saída:
1 2 3 PUM
5 6 7 PUM
9 10 11 PUM
13 14 15 PUM
17 18 19 PUM
21 22 23 PUM
25 26 27 PUM
*/

const entrada = 50
let valor = 1
let str = ""


for (let i = 0; i < entrada; i++) {
    for (let i2 = 1; i2 <= 4; i2++) {
        if (i2 === 4) {
            str = str + " PUM";
            console.log(str);
            str = "";
        } else {
            str = str + valor + " ";
        }
        valor++;
    }
    
}





