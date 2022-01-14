/* 
Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho
pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de
benefício e 8% mensal referente ao FGTS. Faça um programa que receba como
entrada os dois valores mensais oferecidos e tome a decisão informando qual
proposta a pessoa deve aceitar.
*/

const clt = 3000
const pj = 4000

const pjAno = pj * 12

const cltAno = (clt * 12) + clt + 700 + (clt * 0,08) * 12 + (clt / 3)

if(cltAno > pjAno) {
    console.log("clt é melhor")
}
else if(pjAno > cltAno){
    console.log("pj é melohr")
}
else {
    console.log("clt é melhor")
}

console.log(pjAno)
console.log(cltAno)