/* [REFATORAÇÃO]Uma pessoa desenvolvedora recebe frequentementepropostas de trabalho pela 
CLT(Consolidação das Leis Trabalhistas) e pela PJ(Pessoa Jurídica). 
Considerando que o trabalho como CLT envolve férias, 13°salário, R$ 700 de benefício e 
8% mensal referente ao FGTS. Faça um programaque receba como entrada os dois valores mensais 
oferecidos e  tome a decisão informando qual proposta a pessoa deve aceitar. */


const pj = 0
const clt = 1



function propostas (pj, clt) {
    const pjAno = pj * 12
    const cltAno = (clt * 12) + clt + 700 + (clt * 0,08) * 12 + (clt / 3)
    
    if(cltAno > pjAno){
        console.log(`CLT é a melhor proposta.`)
    } else if(pjAno > cltAno) {
        console.log(`PJ é a melhor proposta.`)
    }else {
        console.log(`CLT é a melhor proposta.`)
    }
}

propostas(4000, 4000)