/* 19 - Crie um algoritmo que tem como entrada um array de strings e trata essas
string substituindo os números por letra de acordo com a tabela a seguir, além
disso, deve remover os espaços em branco no começo e fim da string, se
existirem.
Tabela:
1 : i
3 : e
4 : a
5 : s
0 : o
Exemplo entrada:
[' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
Exemplo Saída:
[ 'helloworld', 'webdeveloper', 'otterwise', 'javascript' ] */

const entrada = [" h3ll0 w0rld"];
let palavra = 0;
let letra = "";

for (i = 0; i < entrada.length; i++) {
  palavra = palavra + entrada[i];
  for (index = 0; index < palavra.length; index++) {
    if (palavra[i] === 3) {
      letra = letra + "i";
    } else letra = palavra[i];
    console.log(letra);
  }
}
