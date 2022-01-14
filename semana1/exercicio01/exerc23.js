/* 
Crie uma função que recebe como argumento um valor em segundos,
calcula e retorne uma string formatada HH:MM:SS (horas:minutos:segundos) .
Exemplo de Entrada:
600
-----------------
33567
Exemplo de Saída:
0:10:0
-----------------
9:19:27
*/


function showDisplay(n) {
    let hora = 00;
    let minuto = 00;
    let segundo = 00;
  
    if (n >= 0 && n < 10) {
      segundo = "0" + n;
      console.log(hora + ":" + minuto + ":" + segundo);
    }
  
    if (n >= 0 && n < 59) {
      segundo = n;
    }
  
    if (n >= 60 && n < 3600) {
      minuto = Math.floor(n / 60);
      segundo = n % 60;
      console.log(hora + ":" + minuto + ":" + segundo);
    }
  
    if (n >= 3600) {
      hora = Math.floor(n / 3600);
      minuto = Math.floor((n % 3600) / 60);
      segundo = (n % 3600) % 60;
      console.log(hora + ":" + minuto + ":" + segundo);
    }
  }

showDisplay(600)