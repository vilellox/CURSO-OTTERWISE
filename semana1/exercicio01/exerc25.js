

const clt = 5000
const pj = 1000

const pjAno = pj * 12

const cltAno = (clt * 12) + clt + 700 + (clt * 0,08) * 12 + (clt / 3)

console.log(cltAno)
console.log(pjAno)
if(cltAno < 21453.24){
    console.log(cltAno * 1)
} else if(cltAno >= 21453.25 && cltAno <= 32151.48){
    console.log(cltAno * 0.075)
} else if(cltAno >= 32151.49 && cltAno <= 42869.16){
    console.log(cltAno * 0.15)
}  else if(cltAno >= 42869.17 && cltAno <= 53565.72){
    console.log(cltAno * 0.225)
} else {
    console.log(cltAno * 0.275)
}

if(pjAno < 21453.24){
    console.log(pjAno * 1)
} else if(pjAno >= 21453.25 && pjAno <= 32151.48){
    console.log(pjAno * 0.075)
} else if(pjAno >= 32151.49 && pjAno <= 42869.16){
    console.log(pjAno * 0.15)
}  else if(pjAno >= 42869.17 && pjAno <= 53565.72){
    console.log(pjAno * 0.225)
} else {
    console.log(pjAno * 0,275)
}
